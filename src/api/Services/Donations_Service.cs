using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using s12.DataService.Data;
using s12.Entities.DbSet;
using System.Linq;
using static s12.Services.Epayco_PaymentsService;

namespace s12.Services
{
    public class Donations_Service
    {
        MyDbContext _dbContext;
        Events_Service _events_Service;
        Epayco_PaymentsService _payments_Service;
        public Donations_Service(MyDbContext context, Events_Service events_Service, Epayco_PaymentsService payments_Service)
        {
            _dbContext = context;
            _events_Service = events_Service;
            _payments_Service = payments_Service;
        }

        public List<Donation> Get(string? filterParam, int? pageSize, int? pageNumber)
        {
            var query = _dbContext.Donations;
            //apply filter

            //paging
            if (pageSize.HasValue && pageNumber.HasValue)
            {
                query
                    .Skip((pageNumber.Value * pageSize.Value))
                    .Take(pageSize.Value);
            }

            return query.ToList();
        }

        /// <summary>
        /// Get donations for an event if none, empty list , if event not found returns null
        /// </summary>
        /// <returns>if event not found returns null</returns>
        public async Task<List<Donation_Get?>> Get_By_Event_Id(int event_Id, bool? only_Mine = false, string? user_Name = null, bool? asOwner = false, bool? resumed = false, string? filter = null, int? pageSize = null, int? pageNumber = null)
        {
            //event exists??
            var e = await _events_Service.GetEvent(event_Id);
            if (e.isSuccessfully is false) return null;

            var result = new List<Donation_Get?>();
            var donations = _dbContext.Donations.Where(x => x.Event_Id == event_Id);



            //only mine
            if (only_Mine.HasValue && only_Mine.Value && user_Name != null)
            {
                donations = donations.Where(x => x.Donor_Email == user_Name);
            }


            // var isOwner = e.Event_Owner_Email == user_Name;

            var isOwner = false;



            //Get the user's( by UserName param) donations without been obfuscated
            if ((only_Mine is false || !only_Mine.HasValue) && user_Name != null && isOwner is false)
            {
                await donations.Where(x => x.Donor_Email != user_Name)
                     .ForEachAsync(x =>
                     {
                         var name_With_Spaces = x.Donor_Name.Substring(0, 1);
                         var newName = name_With_Spaces.PadRight(x.Donor_Name.Length - 1, '*');
                         x.Donor_Name = newName;
                         x.Donation_Message = null;
                         x.Donor_Email = null;

                     });
            }

            //thios need to resolve to a response with paging model
            //apply paging and filters
            if (donations.Any())
            {
                //paging
                if (pageSize.HasValue && pageNumber.HasValue)
                {
                    donations
                        .Skip((pageNumber.Value * pageSize.Value))
                        .Take(pageSize.Value);
                }

                //if (resumed.HasValue && resumed.Value)
                //{
                //    donations.ToResumedDonation();
                //}

                result = donations.ToDonation();
            }

            return result;
        }


        public async Task<object> CreateAsync(int event_Id, Donation_Post donation_Post, string? Donor_Email, string? actual_User_Name)
        {
            //event exists??
            // TODO Blocked, events service missing
            var result = await _events_Service.GetEvent(event_Id);
            if (result.isSuccessfully is false) throw new InvalidOperationException("event not found");

            var donation = donation_Post.ToDonation(event_Id, Donor_Email, actual_User_Name);

            //var the_user = _dbContext.Users.FirstOrDefault(x => x.NormalizedEmail.Equals(donation.Donor_Email));
            donation.Donation_Date = DateTime.Now.ToString();
            donation.Owner_Email = result.Event.Event_Owner_Email;
            //create the link

            _dbContext.Donations.Add(donation);
            await _dbContext.SaveChangesAsync();
            var path = $"event/{event_Id}";
            var model = new PaymentModel
            {
                Id = donation.Id,
                Title = result.Event.Title,
                Description = result.Event.Description,
                Amount = donation_Post.Donation_Amount,
                Email = Donor_Email,
                RedirectUrl = $"https://s12-18-tn-csharp-next.vercel.app/{path}"

            };

            var link = _payments_Service.CreatePaymentLink(model);

            donation.Payment_Id = link.data.invoceNumber;
            await _dbContext.SaveChangesAsync();

            return new
            {
                Link = link,
                Donation = donation.ToDonation_Get()
            };
        }

        //public Donation_Get Create(int event_Id, Donation_Post donation)
        //{
        //    var d = this.Create(event_Id, donation.ToDonation());
        //    return d;
        //}
    }
}
