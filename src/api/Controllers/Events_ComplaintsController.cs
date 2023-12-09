using Azure.Core.GeoJson;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Storage;
using s12.Entities.DbSet;
using s12.Entities.Dtos.Requests;
using s12.Services;
using System.ComponentModel.DataAnnotations;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace s12.Controllers
{

    public partial class EventsController : ControllerBase
    {
        [HttpGet("{event_id}/complaints")]
        public async Task<ActionResult<IEnumerable<Complaint>>> Event_Complaints(int event_id, int pageSize = 0, int ageNumber = 0)
        {
            var result = await _events_Service.Get_Complaints_From_Event(event_id, pageSize, ageNumber);
            if (!result.isSuccessfully)
                return BadRequest(result.message);

            return Ok(result.Complaints);
        }

        [HttpGet("{event_id}/complaints/{complaint_Id}")]
        public async Task<ActionResult<Complaint>> Get_Complaint_From_Event(int event_id, int complaint_Id)
        {
            var result = await _events_Service.Get_Single_Complaint_From_Event(event_id, complaint_Id);

            if (!result.isSuccessfully)
                return BadRequest();

            return Ok(result.Complaint);
        }

        //[Authorize]
        [HttpPost("{event_id}/complaints")]
        public async Task<ActionResult<IEnumerable<Complaint>>> Create_Event_Complaint(int event_id, [FromForm] Create_Complaint_Request request)
        {
            var result = await _events_Service.Create_Complaint(event_id, request);

            if (!result.isSuccessfully)
                return BadRequest(result.message);

            return CreatedAtAction(nameof(Event_Complaints), new { event_id }, result.Complaint_Created);
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

}
