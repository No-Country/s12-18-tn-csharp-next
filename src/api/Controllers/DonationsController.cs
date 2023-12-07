using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using s12.Entities.DbSet;
using s12.Services;
using System.Runtime.CompilerServices;

namespace s12.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DonationsController : ControllerBase
    {
        private readonly Events_Service _events_Service;
        Donations_Service _donations_Service;
        public DonationsController(Events_Service events_Service, Donations_Service donations)
        {
            _events_Service = events_Service;
            _donations_Service = donations;
        }

        /// <summary>
        /// /you need to be the owner of this event or the donor to get full details, if not your get a resumed version
        /// </summary>
        /// <param name="event_Id"></param>
        /// <returns></returns>
        [HttpGet("{event_Id}")]
        public async Task<ActionResult<List<Donation_Get>>> Get(int event_Id, bool? only_Mine, int pageSize = 0, int pageNumber = 0)
        {
            bool asOwner = true;
            var actual_User_Email = User.FindFirst("Email")?.Value;
            if (actual_User_Email == null) { asOwner = false; }
            List<Donation_Get?> donations_List = await _donations_Service.Get_By_Event_Id(event_Id, only_Mine, actual_User_Email, asOwner,pageNumber:pageNumber,pageSize:pageSize/*other filters not implementd yet*/);

            return (donations_List is not null) ? donations_List! : NotFound();
        }

        [Authorize]
        [HttpPost("{event_Id}")]
        public ActionResult<Donation_Get> Post(int event_Id,[FromBody] Donation_Post donation)
        {
            var actual_User_Email = User.FindFirst("Email")?.Value;
            var actual_User_Name = User.FindFirst("Name")?.Value;
            //TODO refactor
            Donation post = new Donation
            {
                Donation_Amount = donation.Donation_Amount,
                Donation_Message = donation.Donation_Message,
                Donor_Email = actual_User_Email,
                Event_Id = event_Id,
                Donor_Name = actual_User_Name
            };

            _donations_Service.Create(event_Id, post);
            return Ok();
        }
    }
}


public class Donation_Get
{
    public int Event_Id { get; set; }
    public virtual string Donor_Name { get; set; }
    public string Donor_Email { get; set; }
    public decimal Donation_Amount { get; set; }
    public string Donation_Date { get; set; }
    public virtual string? Donation_Message { get; set; }

}

//how donations are gonna flow?
public class Donation_Post
{
    //public  string Donor_Name { get; init; }
    //public string Donor_Email { get; set; }
    public decimal Donation_Amount { get; set; }
    //public string Donation_Date { get; init; }
    public virtual string? Donation_Message { get; set; }
}


public static class DonationsExtensions
{
    public static void ToResumedDonation(this Donation_Get donation)
    {
        var name_With_Spaces = donation.Donor_Name.Substring(0, 1);
        var newName = name_With_Spaces.PadRight(donation.Donor_Name.Length - 1, '*');
        donation.Donor_Name = newName;
        donation.Donation_Message = null;
        donation.Donor_Email = null;
    }

    public static void ToResumedDonation(this Donation donation)
    {
        var name_With_Spaces = donation.Donor_Name.Substring(0, 1);
        var newName = name_With_Spaces.PadRight(donation.Donor_Name.Length - 1, '*');
        donation.Donor_Name = newName;
        donation.Donation_Message = null;
        donation.Donor_Email = null;
    }

    public static void ToResumedDonation(this List<Donation_Get> donation)
    {
        donation.ForEach(donation => { donation.ToResumedDonation(); });
    }

    public static void ToResumedDonation(this List<Donation> donation)
    {
        donation.ForEach(donation => { donation.ToResumedDonation(); });
    }

    /// <summary>
    /// Updates expression tree to obfuscate fields
    /// </summary>
    /// <param name="donation"></param>
    public static void ToResumedDonation(this IQueryable<Donation> donation)
    {
        donation.ForEachAsync(donation => donation.ToResumedDonation());
    }


    public static Donation_Get ToDonation_Get(this Donation donation)
    {
        var dto = new Donation_Get
        {
            Donor_Name = donation.Donor_Name,
            Donation_Amount = donation.Donation_Amount,
            Donation_Date = donation.Donation_Date,
            Donation_Message = donation.Donation_Message,
            Donor_Email = donation.Donor_Email,
            Event_Id = donation.Event_Id
        };
        return dto;
    }

    public static List<Donation_Get> ToDonation(this List<Donation> donation)
    {
        return donation.Select(x => x.ToDonation_Get()).ToList();
    }

    public static List<Donation_Get> ToDonation(this IQueryable<Donation> donation)
    {
        return donation.Select(x => x.ToDonation_Get()).ToList();
    }


    public static Donation ToDonation(this Donation_Post donation)
    {
        var entity = new Donation
        {
        //    Donor_Name = donation.Donor_Name,
            Donation_Amount = donation.Donation_Amount,
         //   Donation_Date = donation.Donation_Date,
            Donation_Message = donation.Donation_Message,
       //     Donor_Email = donation.Donor_Email,
           // Event_Id = donation.Event_Id,
        };
        return entity;
    }
}

