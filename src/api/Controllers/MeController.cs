using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using s12.Entities.DbSet;
using s12.Services;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;

namespace s12.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MeController : ControllerBase
    {
        private  readonly Users_Service _users_Service;

        public MeController(Users_Service users_Service) => _users_Service = users_Service;

        [HttpGet]
        //[Authorize]
        public async Task<ActionResult<User_Get>> Get([EmailAddress]string? user_Email)
        {
            //TODO change this when front has already been integrated, => remove parameter
            try
            {

                var email = User.FindFirst("Email")?.Value;
                return await _users_Service.Get_By_Email_Async(email ?? user_Email);
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
        }

        [HttpPatch("{user_Email}")]
       // [Authorize]
        public async Task<ActionResult<User_Get?>> Patch_User([EmailAddress] string? user_Email, [FromBody] User_Patch user )
        {
            //TODO change this when front has already been integrated, => remove parameter
            var email = User.FindFirst(ClaimTypes.Email)?.Value;
            return  await _users_Service.Update_User_Async(user_Email??email, user);
        }

    }

    public class User_Get 
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Dni { get; set; } = string.Empty;
        public DateTime? Date_Of_Birth { get; set; } 
        public bool Is_Verified { get; set; } = false;
        public bool Is_Ong { get; set; } = false;
        public bool Is_Banned { get; set; } = false;
        public string Gender { get; set; } = string.Empty;
        public Bank_Details? Bank_Details { get; set; }
    }

    public class User_Patch
    {
        public string? Name { get; set; } 
        //public string Dni { get; set; } = string.Empty;
        public DateTime? Date_Of_Birth { get; set; } 
        public string? Gender { get; set; } 
        public Bank_Details? Bank_Details { get; set; }
    }
}
