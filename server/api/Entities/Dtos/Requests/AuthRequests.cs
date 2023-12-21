using System.ComponentModel.DataAnnotations;
using s12.Entities.DbSet;

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
    string Password,
    string Dni,
    DateTime DateOfBirth,
    string Gender,
    Bank_Details? Bank_Details
);