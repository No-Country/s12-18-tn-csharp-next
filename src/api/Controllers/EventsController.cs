using Azure.Core.GeoJson;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using s12.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace s12.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public partial class EventsController : ControllerBase
    {
        private Events_Service _events_Service;
        public EventsController(Events_Service events_Service) => _events_Service = events_Service;

        // GET: <EventsController>
        [HttpGet] public IEnumerable<Event_Get> Get(int pageSize = 0, int pageNumber = 0) => _events_Service.Events;

        [HttpGet("{event_Id}")]
        public ActionResult<IEnumerable<string>> Get(int event_Id)
        {
            var e = _events_Service.Events.FirstOrDefault(x => x.Event_Id == event_Id);
            return e is null ? NotFound() : Ok(e);
        }

        // POST: Event
        [HttpPost]
        //[Authorize]
        public ActionResult<IEnumerable<string>> Post(Event_Post new_Event)
        {
            var e = new Event_Get();

            e.Created_Date = DateOnly.FromDateTime(DateTime.Now);
            e.Created_By_User = "GetTheUserFromSession";
            e.Event_Id = _events_Service.Events.OrderBy(x => x.Event_Id).Last().Event_Id + 1;
            e.Geo = new_Event.Geo;

            _events_Service.Events.Add(e);

            return CreatedAtAction(nameof(Get), new { event_Id = e.Event_Id }, e);
        }
    }

    //TODO move this classes to common
    public class Event_Get
    {
        public int Event_Id { get; set; }
        public DateOnly Created_Date { get; set; }
        public string Created_By_User { get; set; }
        public bool Is_Validated { get; set; } = false;
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Collect_Goal { get; set; }
        public decimal Collected { get; set; }

        public Media[] Media { get; set; }
        public Geo Geo { get; set; }

        public bool Has_Complaints { get { return !(Complaints is null || !this.Complaints.Any()); } }
        public List<Complaint> Complaints { get; set; }

    }

    public class Event_Post
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Collect_Goal { get; set; }
        public decimal Collected { get; set; }
        public Geo Geo { get; set; }
    }

    public class Media
    {
        public string Type { get; set; }
        public string Url { get; set; }
    }

    public enum Media_Type
    {
        Image,
        Video,
        Audio,
        Document,
    }

    public class Geo
    {
        public string Country { get; set; }
        public string Provice { get; set; }
        public string City { get; set; }
        public double Lat { get; set; }
        public double Long { get; set; }
    }
}
