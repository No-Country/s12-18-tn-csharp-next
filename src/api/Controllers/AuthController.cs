using Microsoft.AspNetCore.Mvc;
using s12.Entities.Dtos.Requests;
using s12.Repositories.Interfaces;

namespace s12.Controllers;

[Route("[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthenticationRepository _authRepository;

    public AuthController(IAuthenticationRepository authRepository)
    {
        _authRepository = authRepository;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest request)
    {
        var jwt = await _authRepository.Register(request);
        return Ok(jwt);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        var jwt = await _authRepository.Login(request);

        return Ok(jwt);
    }
}
