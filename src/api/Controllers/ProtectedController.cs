using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace s12.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProtectedController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public ActionResult<object> Get()
        {
            return new {
                Message = $"You are authenticated",
                Claims = User.Claims.Select(x => new { Type = x.Type, Value = x.Value }).ToList()
            };
        }
    }
}
