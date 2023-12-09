using Azure.Core.GeoJson;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using s12.Entities.DbSet;
using s12.Entities.Dtos.Requests;
using s12.Entities.Dtos.Responses;
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


        [HttpGet]
        async public Task<ActionResult<IEnumerable<Event>>> Get_Events(int pageSize = 10, int pageNumber = 0)
        {
            var result = await _events_Service.GetEvents(pageSize, pageNumber);
            if (!result.isSuccessfully)
                return BadRequest(result.message);

            return Ok(result.Events);
        }

        [HttpGet("{event_Id}")]
        public async Task<ActionResult<Get_Event_Response>> Get_Event_By_Id(int event_Id)
        {
            var result = await _events_Service.GetEvent(event_Id);
            if (!result.isSuccessfully)
                return NotFound();
            return Ok(result.Event);
        }

        // POST: Event
        [HttpPost]
        [Authorize(Policy = "StandardRights")]
        public async Task<ActionResult> Create_Event([FromForm] Create_Event_Request request)
        {
            var user_Email = User.FindFirst("Email")?.Value;
            var user_Id = User.FindFirst("Id")?.Value;
            var result = await _events_Service.CreateEvent(request, user_Id, user_Email);

            if (!result.isSuccessfully)
                return BadRequest(result.message);

            return CreatedAtAction(nameof(Get_Event_By_Id), new { event_Id = result.event_Created.Id }, result.event_Created);

        }

        // [HttpPut("{event_Id}/Media")]
        // //[Authorize]
        // public ActionResult<IEnumerable<Media[]>> Post_Media(int event_Id, [FromForm] IFormFile[] media)
        // {
        //     var e = _events_Service.Events.FirstOrDefault(x => x.Event_Id == event_Id);
        //     if (e is null) return BadRequest();

        //     var _media = media.Select(x => new Media() { Type = x.ContentType, Url = $"somePlaceOnserver/{x.FileName}" });
        //     if (e.Media is null) e.Media = new Media[0];
        //     e.Media = e.Media.Concat(_media).ToArray();

        //     return CreatedAtAction(nameof(Get), new { event_Id = e.Event_Id }, e.Media);
        // }
    }

    //TODO move this classes to common
    public class Event_Get
    {
        public int Event_Id { get; set; }
        public string Event_Owner_Email { get; set; }
        public DateOnly Created_Date { get; set; }
        public string Created_By_User { get; set; }
        public bool Is_Validated { get; set; } = false;
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Collect_Goal { get; set; }
        public decimal Collected { get; set; }
        public int Donors_Count { get; set; }
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




}
