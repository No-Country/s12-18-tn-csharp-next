using s12.Entities.Dtos.Requests;
using s12.Entities.Dtos.Responses;

namespace s12.Repositories.Interfaces;

public interface IAuthenticationRepository
{
    Task<LoginResponse> Register(RegisterRequest request);

    Task<LoginResponse> Login(LoginRequest request);
}