using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Validations;
using s12.Controllers;
using s12.DataService.Data;

using s12.Entities.DbSet;
using s12.Entities.Dtos.Requests;
using s12.Entities.Dtos.Responses;
using s12.Migrations;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.Eventing.Reader;
using System.Net.Mail;

namespace s12.Services
{
    public interface IEvents_Service
    {
        //  Task<List<Event_Get>> Get_Events_From_User(string owner_Email);
    }

    public class Events_Service : IEvents_Service
    {
        private readonly MyDbContext _context;
        private readonly Local_MediaStorage_Service _local_MediaStorage_Service;

        public Events_Service(MyDbContext context, Local_MediaStorage_Service local_MediaStorage_Service)
        {
            _context = context;
            _local_MediaStorage_Service = local_MediaStorage_Service;
        }

        public async Task<Get_Events_Response> GetEvents(int? pageSize, int? pageNumber, string? searchTerm, string? orderBy = "DSC")
        {
            try
            {
                IQueryable<Event> query = _context.Events
                    .Include(x => x.Complaints);

                if (searchTerm is not null)
                {
                    query = query.Where(x => x.Title.Contains(searchTerm) || x.Description.Contains(searchTerm));
                }

                if (orderBy is null) orderBy = "DSC";
                var order = orderBy.ToUpper();
                string[] orderOptions = { "ASC", "DSC" };

                if (orderOptions.Contains(order) is false) orderBy = "DSC";

                query = (orderBy == "ASC") ? query.OrderBy(x => x.Created_Date) : query.OrderByDescending(x => x.Created_Date);

                if (pageSize.HasValue && pageNumber.HasValue)
                {
                    query = query
                        .Skip((pageNumber.Value * pageSize.Value))
                        .Take(pageSize.Value).AsQueryable();
                    // .ToList();
                }

                //amount and count
                var events = await query.ToListAsync();
                foreach (var item in events)
                {
                    SetAmounts(item);
                }

                return new Get_Events_Response(await query.ToListAsync(), "Query Successful", true);
            }
            catch (Exception e)
            {
                return new Get_Events_Response(null, e.Message, false);
            }
        }

        public async Task<Get_Event_Response> GetEvent(int event_Id)
        {
            try
            {
                var Event = await _context.Events.Include(x => x.Complaints).FirstOrDefaultAsync(x => x.Event_Id == event_Id);
                if (Event is null)
                    return new Get_Event_Response(null, "Event not found", false);
                SetAmounts(Event);
                return new Get_Event_Response(Event, "Query Successful", true);
            }
            catch (Exception e)
            {
                return new Get_Event_Response(null, e.Message, false);
            }
        }

        //TODO calculate this on create insted on listing
        private void SetAmounts(Event ev)
        {
            var q = _context.Donations.Where(x => x.Event_Id == ev.Event_Id);

            var s = q.Sum(x => x.Donation_Amount);
            var c = q.Count(x => x.Donation_Amount > 0);

            ev.Donors_Count = c;
            ev.Collected = s;
        }

        // TODO: Refactor To Create_Event_Response
        public async Task<Create_Event_Response> CreateEvent(Create_Event_Request request, string? user_Id, string? user_Email, string? user_Name)
        {
            try
            {
                var new_Event = new Event()
                {
                    Title = request.Title,
                    Description = request.Description,
                    Created_By_User = user_Name ?? String.Empty,
                    Geo = request.Geo,
                    // Is_Validated = request.Is_Validated,
                    Event_Owner_Email = user_Email,
                    Collect_Goal = request.Collect_Goal,
                    // Media = request.Media_Collection is not null ? request.Media_Collection.Select(x => new Media() { Type = x.ContentType, Url = $"somePlaceOnserver/{x.FileName}" }).ToList() : new List<Media>(),
                    User_Id = user_Id,
                    Complaints = new List<Complaint>()
                };
                await _context.Events.AddAsync(new_Event);
                await _context.SaveChangesAsync();
                return new Create_Event_Response(new_Event, "Created successfully", true);
            }
            catch (Exception e)
            {
                return new Create_Event_Response(null, e.Message, false);
            }
        }

        public async Task<Create_Event_Response> AddMediaToEventAsync(int event_Id, MediaStream[] media)
        {
            if (media.Any() is false) return new Create_Event_Response(null, "empty", false);

            List<Media> theStoredMedia = await _local_MediaStorage_Service.SaveMediaAsync(media);
            var theEvent = (await this.GetEvent(event_Id));

            if (theEvent is null) return new Create_Event_Response(null, "event not found", false);

            try
            {
                theEvent.Event.Media.AddRange(theStoredMedia);
                _context.Entry(theEvent.Event).State = EntityState.Modified;
                var res = await _context.SaveChangesAsync();
                return new Create_Event_Response(theEvent.Event, "Media Added", true);
            }
            catch (Exception das)
            {
                //TODO Refactor
                string exs = das.Message;
                var ex = das;
                while (ex.InnerException != null)
                {
                    var inner = das.InnerException;
                    exs += " | " + inner.Message;
                    ex = ex.InnerException;
                }
                return new Create_Event_Response(null, exs, false);
                //throw;
            }
        }

        public async Task<Create_Event_Response> DeleteEventMedia(int[] mediaIds)
        {
            throw new NotImplementedException();
            if (mediaIds.Any())
            {
                return new Create_Event_Response(null, "deleted", true);
            }
            else
                return new Create_Event_Response(null, "No media Ids", false);
        }

        //TODO requiere que media tenga un id y un indice
        public async Task<Create_Event_Response> ChangeMediaOrder(int mediaId, int newIndex)
        {
            throw new NotImplementedException();
        }

        public async Task<Get_Complaints_Response> Get_Complaints_From_Event(int event_Id, int? pageSize, int? pageNumber)
        {
            try
            {
                var Event = await _context.Events.FirstOrDefaultAsync(x => x.Event_Id == event_Id);
                if (Event is null)
                    return new Get_Complaints_Response(null, "Event not found", false);
                var Complaints = await _context.Complaints.Where(c => c.Event_Id == event_Id).ToListAsync();

                return new Get_Complaints_Response(Complaints, "Query Successful", true);
            }
            catch (Exception e)
            {
                return new Get_Complaints_Response(null, e.Message, false);
            }
        }

        public async Task<Get_Complaint_Response> Get_Single_Complaint_From_Event(int event_id, int complaint_id)
        {
            try
            {
                var Event = await _context.Events.Include(x => x.Complaints).FirstOrDefaultAsync(x => x.Event_Id == event_id);
                if (Event is not null && Event.Has_Complaints)
                {
                    var complaint = Event.Complaints.FirstOrDefault(c => c.Complaint_Id == complaint_id);

                    return complaint is null ? new Get_Complaint_Response(null, "Complaint not found", false) : new Get_Complaint_Response(complaint, "Query Successful", true);
                }
                return new Get_Complaint_Response(null, "Event not found", false);
            }
            catch (Exception e)
            {
                return new Get_Complaint_Response(null, e.Message, false);
            }
        }

        public async Task<Create_Complaint_Response> Create_Complaint(int event_Id, Create_Complaint_Request request)
        {
            var Event = await _context.Events
                .Include(x => x.Complaints)
                .FirstOrDefaultAsync(x => x.Event_Id == event_Id);

            if (Event is null) return new Create_Complaint_Response(null, "Event not found", false);
            if (Event.Complaints is null) Event.Complaints = new List<Complaint>();

            var new_Complaint = new Complaint
            {
                Title = request.Title,
                Description = request.Description,
                Complaint_Date = DateTime.UtcNow,
                Event_Id = Event.Event_Id,
                Reporter_Id = request.Reporter_Id ?? "Anonymous",
                Reporter_Name = request.Reporter_Name ?? "Anonymous",
            };

            if (request.Media_Collection is not null)
            {
                try
                {
                    var streams = request.Media_Collection
                         .Select(x => new MediaStream()
                         {
                             Type = x.ContentType,
                             FileName = x.FileName,
                             Stream = x.OpenReadStream()
                         })
                         .ToArray();

                    new_Complaint.Media = new List<Media>();

                    var mediaStored = await _local_MediaStorage_Service.SaveMediaAsync(streams);
                    mediaStored.ForEach(x => new_Complaint.Media.Add(x));
                }
                catch (Exception e)
                {
                    //log e;
                    throw;
                }
            }

            Event.Complaints.Add(new_Complaint);
            Event.Has_Complaints = true;
            _context.Entry(Event).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return new Create_Complaint_Response(new_Complaint, "Created successfully", true);
            // TODO: DeactiveEvent Service
            // TODO: Update_Event Service
        }

        public Task<Get_Events_Response> Get_Events_From_User(string owner_Email)
        {
            //if is null empty or not a valid email
            if (owner_Email.IsNullOrEmpty() is false)
            {
                try
                {
                    var email = new MailAddress(owner_Email);
                    var res = _context.Events.Where(x => x.Event_Owner_Email == owner_Email).ToList();

                    return Task.FromResult(new Get_Events_Response(res, String.Empty, true));
                }
                catch (Exception e)
                {
                    throw new ArgumentException(nameof(owner_Email), e);
                }
            }
            throw new ArgumentNullException(nameof(owner_Email));
        }
    }
}
