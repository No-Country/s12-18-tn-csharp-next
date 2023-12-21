using s12.Entities.DbSet;

namespace s12.Entities.Dtos.Responses;

public record RegisterResponse(
    string? jwt, string message, bool isSuccesfully, User? user
);

public record LoginResponse(
    string? jwt, string message, bool isSuccesfully, User? user
);