using Azure.Core.GeoJson;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Storage;
using s12.Services;
using System.ComponentModel.DataAnnotations;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace s12.Controllers
{

    public partial class EventsController : ControllerBase
    {
        [HttpGet("{event_id}/complaints")]
        public ActionResult<IEnumerable<Complaint>> Event_Complaints(int event_id, int pageSize = 0, int ageNumber = 0)
        {
            //TODO this is part of service, here only for mocked data
            var eve = _events_Service.Events.FirstOrDefault(x => x.Event_Id == event_id);

            if (eve is not null)
            {
                return Ok(eve.Complaints ?? Enumerable.Empty<Complaint>());
            }
            return BadRequest();
        }

        [HttpGet("{event_id}/complaints/{complaint_Id}")]
        public ActionResult<IEnumerable<Complaint>> Event_Complaints(int event_id, int complaint_Id)
        {
            //TODO this is part of service, here only for mocked data
            var eve = _events_Service.Events.FirstOrDefault(x => x.Event_Id == event_id);

            if (eve is not null && eve.Has_Complaints)
            {
                var complaint = eve.Complaints.FirstOrDefault(x => x.Complaint_Id == complaint_Id);
                return complaint is null ? NotFound() : Ok(complaint);
            }

            return NotFound();
        }

        //[Authorize]
        [HttpPost("{event_id}/complaints")]
        public ActionResult<IEnumerable<Complaint>> Post_Event_Complaints(int event_id, Complaint_Post new_Complaint)
        {

            //TODO All This to service
            var e = _events_Service.Events.FirstOrDefault(x => x.Event_Id == event_id);
            if (e is not null)
            {
                var c = new Complaint();
                if (c.Media is null) c.Media = new List<Media>();
                if (e.Complaints is null) e.Complaints = new List<Complaint>();

                c.Complaint_Id = 1 + (e.Complaints.Any() ? e.Complaints.Select(x => x.Complaint_Id).OrderBy(x => x).LastOrDefault() : 0);
                c.Complaint_Date = DateOnly.FromDateTime(DateTime.Now);
                c.Reporter_Id = -1;
                c.Reporter_Name = "FromSession";

                c.Title = new_Complaint.Title;
                c.Description = new_Complaint.Description;

                e.Complaints.Add(c);

                if (new_Complaint.Media is not null)
                {
                    foreach (var item in new_Complaint.Media)
                    {
                        c.Media.Add(new Media()
                        {
                            Type = item.ContentType,
                            Url = $"somePlaceOnserver/{item.FileName}"
                        });
                    }
                }

                return CreatedAtAction(nameof(Event_Complaints), new { event_id = event_id, complaint_Id = c.Complaint_Id }, c);
            }

            return BadRequest();
        }
    }

    public class Complaint_Post
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        public IFormFile[]? Media { get; set; }
    }


    //TODO move to common or entities
    public class Complaint
    {
        public int Complaint_Id { get; set; }
        public DateOnly Complaint_Date { get; set; }
        public int Reporter_Id { get; set; }
        public string Reporter_Name { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public IList<Media> Media { get; set; }
    }
}
