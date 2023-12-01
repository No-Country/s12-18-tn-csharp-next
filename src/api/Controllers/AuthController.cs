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
        var result = await _authRepository.Register(request);

        if (!result.isSuccesfully)
            return BadRequest(result.message);

        return Ok(result.jwt);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        var result = await _authRepository.Login(request);

        if (!result.isSuccesfully)
            return Unauthorized(result.message);

        return Ok(result.jwt);
    }
}
