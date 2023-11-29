
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using s12.Entities.DbSet;
using s12.Entities.Dtos.Requests;
using s12.Entities.Dtos.Responses;
using s12.Repositories.Interfaces;

namespace s12.Repositories;

public class AuthenticationRepository : IAuthenticationRepository
{
    private readonly UserManager<User> _userManager;
    private readonly IConfiguration _configuration;
    public AuthenticationRepository(UserManager<User> userManager, IConfiguration configuration)
    {
        _userManager = userManager;
        _configuration = configuration;
    }

    public async Task<RegisterResponse> Register(RegisterRequest request)
    {
        try
        {
            User user = new()
            {
                Email = request.Email,
                Name = request.Name,
                UserName = request.Email,
            };

            var result = await _userManager.CreateAsync(user, request.Password);

            if(result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, Role.User);
                var jwt = GetToken(user, new[] { new Claim("Role", Role.User) } );
                return new RegisterResponse(jwt, "Success", true);
            }
            else
            {
                var messages = String.Join("-", result.Errors.Select(x => $"{x.Code}|{x.Description}"));
                return new RegisterResponse("", messages, false);
            }
        }
        catch (Exception e)
        {
            return new RegisterResponse("", e.Message, false); 
        }
    }
    public async Task<LoginResponse> Login(LoginRequest request)
    {
        var user = await _userManager.FindByEmailAsync(request.Email);

        // Check credentials 

        if (user is null || !await _userManager.CheckPasswordAsync(user, request.Password))
        {
            return new LoginResponse("Invalid Credentials");
        }

        var authClaims = new List<Claim>
        {
            new("Name", user.Name),
            new("Email", user.Email),
            new("Id", user.Id)
        };

        var userRoles = await _userManager.GetRolesAsync(user);

        authClaims.AddRange(userRoles.Select(userRole => new Claim("Role", userRole)));

        var token = GetToken(authClaims);

        return new LoginResponse(new JwtSecurityTokenHandler().WriteToken(token));
    }


    private JwtSecurityToken GetToken(IEnumerable<Claim> authClaims)
    {
        var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Key"]));

        var token = new JwtSecurityToken(
            issuer: _configuration["JWT:Issuer"],
            audience: _configuration["JWT:Audience"],
            expires: DateTime.Now.AddHours(15),
            claims: authClaims,
            signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256));

        return token;
    }

    private string GetToken(User user, IEnumerable<Claim>? additionalClaims)
    {
        var authClaims = new List<Claim>
        {
            new("Name", user.Name),
            new("Email", user.Email),
            new("Id", user.Id)
        };

        authClaims.AddRange(additionalClaims);

        var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Key"]));

        var token = new JwtSecurityToken(
            issuer: _configuration["JWT:Issuer"],
            audience: _configuration["JWT:Audience"],
            expires: DateTime.Now.AddHours(15),
            claims: authClaims,
            signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256));

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
