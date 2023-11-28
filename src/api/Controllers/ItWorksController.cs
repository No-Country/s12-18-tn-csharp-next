using Microsoft.AspNetCore.Mvc;

namespace s12.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItWorksController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "Hello, It works!!!";
        }

        [HttpPost]
        public string Post(PostModel model)
        {
            return $"Hello {model.Name}, It works!!!";
        }

        public class PostModel
        {
            public string Name { get; set; }
        }
    }
}