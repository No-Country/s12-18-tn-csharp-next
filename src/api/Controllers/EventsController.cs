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
        public async Task<ActionResult> Create_Event([FromBody] Create_Event_Request request, [FromForm] IFormFile[] media)
        {
            var user_Email = User.FindFirst("Email")?.Value;
            var user_Id = User.FindFirst("Id")?.Value;
            var user_Name = User.FindFirst("Name")?.Value;
            var result = await _events_Service.CreateEvent(request, user_Id, user_Email,user_Name);

            if (!result.isSuccessfully)
                return BadRequest(result.message);
            return CreatedAtAction(nameof(Get_Event_By_Id), new { event_Id = result.event_Created.Event_Id }, result.event_Created);

        }

        /// <summary>
        /// Add media to an event
        /// </summary>
        /// <param name="event_Id"></param>
        /// <param name="media"></param>
        /// <returns></returns>
        [Authorize]
        [HttpPost("{event_Id}/Media")]
        public async Task<ActionResult<IEnumerable<Media[]>>> Post_Media(int event_Id, [FromForm] IFormFile[] media)
        {
            //TODO move to service
            #region This needs to be part of Service
            var e = await _events_Service.GetEvent(event_Id);

            if (e.isSuccessfully is false) return BadRequest(new { error = e.message });

            //do you own the event?
            if (e.Event.Event_Owner_Email != User.FindFirst("Email").Value)
                return BadRequest(new { error = "you dont own this event" }); 
            #endregion

            //store the media
            var streams = media
                .Select(x => new MediaStream() 
                    { Type = x.ContentType,
                    FileName = x.FileName,
                    Stream =x.OpenReadStream()  })
                .ToArray();

            var res = await _events_Service.AddMediaToEventAsync(event_Id,streams);
            if(res.isSuccessfully is false)
            {
                return BadRequest(res); //not only bad request, could be 500
            }

           var result = Created(nameof(Get_Event_By_Id), new { event_Id});
            return CreatedAtAction("Get_Event_By_Id", new { event_Id },e);
        }
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
