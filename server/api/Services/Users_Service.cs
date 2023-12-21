using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using s12.Controllers;
using s12.DataService.Data;
using s12.Entities.DbSet;

namespace s12.Services
{
    public class Users_Service : IUsers_Service
    {
        private readonly UserManager<User> _user_Manager;
        private readonly MyDbContext _context;

        public Users_Service(UserManager<User> userManager, MyDbContext context)
        {
            _user_Manager = userManager;
            _context = context;
        }
        public async Task<User_Get?> Get_By_Email_Async(string email)
        {
            if (email is null) throw new NullReferenceException("email");
            var user = await _user_Manager.FindByEmailAsync(email);
            return (user == null) ? null : user.To_UserGet();
        }

        public async Task<User_Get> Update_User_Async(string email, User_Patch user_To_Patch)
        {
            //  var user = await _user_Manager.FindByEmailAsync(email);
            //  if (user is null) throw new InvalidOperationException("Invalid user");

            //  //patch
            //  user.Name = user_To_Patch.Name ?? user.Name;
            //  user.Date_Of_Birth = user_To_Patch.Date_Of_Birth ?? user.Date_Of_Birth;
            //  user.Gender = user_To_Patch.Gender?? user.Gender;
            //  //TODO bankdetails needs a DTO?

            //  if(user_To_Patch is not null)
            //  {
            //      user.Bank_Details = new Bank_Details {
            //          Account_Number = user_To_Patch.Bank_Details!.Account_Number,
            //          Bank = user_To_Patch.Bank_Details.Bank,
            //          Type = user_To_Patch.Bank_Details.Type };
            //  }
            // // user.Bank_Details = user_To_Patch.Bank_Details ??  user.Bank_Details;

            ////  var update_Result = await _user_Manager.UpdateAsync(user);

            //  return user.To_UserGet()!;

            var user = await _context.Users.FirstOrDefaultAsync(x => x.NormalizedEmail.Equals(email.ToUpper()));
            if (user is null) throw new InvalidOperationException("Invalid user");

            //patch
            user.Name = user_To_Patch.Name ?? user.Name;
            user.Date_Of_Birth = user_To_Patch.Date_Of_Birth ?? user.Date_Of_Birth;
            user.Gender = user_To_Patch.Gender ?? user.Gender;
            //TODO bankdetails needs a DTO?
            user.Bank_Details = user_To_Patch.Bank_Details ?? user.Bank_Details;

            _context.Entry<User>(user).State = EntityState.Modified;
            var update_Result = await _context.SaveChangesAsync();

            return user.To_UserGet()!;
        }
    }

    public interface IUsers_Service
    {
    }

    public static class Users_Extensions
    {
        //mapper
        public static User_Get? To_UserGet(this User user)
        {
            if (user == null) return null;
            var dto = new User_Get
            {
                Name = user.Name,
                Email = user.Email,
                Dni = user.Dni,
                Date_Of_Birth = user.Date_Of_Birth,
                Gender = user.Gender,
                Is_Ong = user.Is_Ong,
                Is_Banned = user.Is_Banned,
                Is_Verified = user.Is_Verified,
                Bank_Details = user.Bank_Details
            };
            return dto;
        }
    }

}
