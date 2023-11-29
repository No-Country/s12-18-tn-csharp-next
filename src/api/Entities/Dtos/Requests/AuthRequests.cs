using System.ComponentModel.DataAnnotations;

namespace s12.Entities.Dtos.Requests;

public record LoginRequest(
    string Email,
    string Password
);

public record RegisterRequest(
    [Required]
    string Name,
    [EmailAddress]
    string Email,
    [Required]
    string Password
);