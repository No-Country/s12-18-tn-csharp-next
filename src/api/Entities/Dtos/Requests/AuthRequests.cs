namespace s12.Entities.Dtos.Requests;

public record LoginRequest(
    string Email,
    string Password
);

public record RegisterRequest(
    string Name,
    string Email,
    string Password
);