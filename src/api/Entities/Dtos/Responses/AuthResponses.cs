namespace s12.Entities.Dtos.Responses;

public record RegisterResponse(
    string jwt
);

public record LoginResponse(
    string jwt
);