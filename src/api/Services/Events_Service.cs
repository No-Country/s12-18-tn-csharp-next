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
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.Eventing.Reader;
using System.Net.Mail;

namespace s12.Services
{
    public interface IEvents_Service
    {
        Task<List<Event_Get>> Get_Events_From_User(string owner_Email);
    }

    public class Events_Service : IEvents_Service
    {
        private readonly MyDbContext _context;

        public Events_Service(MyDbContext context)
        {
            _context = context;
        }

        public async Task<Get_Events_Response> GetEvents(int? pageSize, int? pageNumber)
        {
            try
            {
                var query = await _context.Events.ToListAsync();

                if (pageSize.HasValue && pageNumber.HasValue)
                {
                    query = query
                        .Skip((pageNumber.Value * pageSize.Value))
                        .Take(pageSize.Value)
                        .ToList();
                }

                return new Get_Events_Response(query, "Query Successful", true);
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
                var Event = await _context.Events.FirstOrDefaultAsync(x => x.Id == event_Id);
                if (Event is null)
                    return new Get_Event_Response(null, "Event not found", false);

                return new Get_Event_Response(Event, "Query Successful", true);
            }
            catch (Exception e)
            {
                return new Get_Event_Response(null, e.Message, false);
            }
        }

        // TODO: Refactor To Create_Event_Response
        public async Task<Create_Event_Response> CreateEvent(Create_Event_Request request, string? user_Id, string? user_Email)
        {
            try
            {
                // TODO: Error Handling

                // TODO: Upload_Media Service
                var new_Event = new Event()
                {
                    Title = request.Title,
                    Description = request.Description,
                    Geo = request.Geo,
                    Is_Validated = request.Is_Validated,
                    Event_Owner_Email = user_Email,
                    Goal = request.Goal,
                    Media_Collection = request.Media_Collection is not null ? request.Media_Collection.Select(x => new Media() { Type = x.ContentType, Url = $"somePlaceOnserver/{x.FileName}" }).ToList() : new List<Media>(),
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

        public async Task<Get_Complaints_Response> Get_Complaints_From_Event(int event_Id, int? pageSize, int? pageNumber)
        {
            try
            {
                var Event = await _context.Events.FirstOrDefaultAsync(x => x.Id == event_Id);
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
                var Event = await _context.Events.FirstOrDefaultAsync(x => x.Id == event_id);
                if (Event is not null && Event.Has_Complaints)
                {
                    var complaint = Event.Complaints.FirstOrDefault(c => c.Id == complaint_id);

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
            var Event = await _context.Events.FirstOrDefaultAsync(x => x.Id == event_Id);
            if (Event is null) return new Create_Complaint_Response(null, "Event not found", false);
            if (Event.Complaints is null)
                Event.Complaints = new List<Complaint>();
            var new_Complaint = new Complaint
            {
                Title = request.Title,
                Description = request.Description,
                Event_Id = Event.Id,
                Reporter_Id = request.Reporter_Id ?? "Anonymous",
                Reporter_Name = request.Reporter_Name ?? "Anonymous",
                Media_Collection = request.Media_Collection is not null ? request.Media_Collection.Select(file => new Media
                {
                    Type = file.ContentType,
                    Url = $"somePlaceOnserver/{file.FileName}"
                }).ToList() : new List<Media>()
            };
            Event.Complaints.Add(new_Complaint);
            Event.Has_Complaints = true;
            await _context.Complaints.AddAsync(new_Complaint);
            //  if (request.Media_Collection is not null)
            // {
            //     foreach (var item in new_Complaint.Media_Collection)
            //     {
            //         c.Media.Add(new Media()
            //         {
            //             Type = item.ContentType,
            //             Url = $"somePlaceOnserver/{item.FileName}"
            //         });
            //     }
            // }
            await _context.SaveChangesAsync();
            return new Create_Complaint_Response(new_Complaint, "Created successfully", true);
            // TODO: DeactiveEvent Service
            // TODO: Update_Event Service
        }

        public Task<List<Event_Get>> Get_Events_From_User(string owner_Email)
        {
            //if is null empty or not a valid email
            if (owner_Email.IsNullOrEmpty() is false)
            {
                try
                {
                    var email = new MailAddress(owner_Email);
                    var res = this.Events.Where(x => x.Event_Owner_Email == owner_Email).ToList();
                    return Task.FromResult(res);
                }
                catch (Exception e)
                {
                    throw new ArgumentException(nameof(owner_Email),e);
                }
            }
            throw new ArgumentNullException(nameof(owner_Email));
        }
    }
}
