namespace s12.Entities.Dtos.Responses;

public record RegisterResponse(
    string jwt, string message, bool isSuccesfully
);

public record LoginResponse(
    string jwt
);