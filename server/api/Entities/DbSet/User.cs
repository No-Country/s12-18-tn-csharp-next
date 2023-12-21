using Microsoft.AspNetCore.Identity;

namespace s12.Entities.DbSet;

public class User : IdentityUser
{
    public string Name { get; set; } = string.Empty;
    public string Dni { get; set; } = string.Empty;
    public DateTime Date_Of_Birth { get; set; } = DateTime.UtcNow;
    public bool Is_Verified { get; set; } = false;
    public bool Is_Ong { get; set; } = false;
    public bool Is_Deleted { get; set; } = false;
    public bool Is_Banned { get; set; } = false;
    public string Gender { get; set; } = string.Empty;
    public Bank_Details? Bank_Details { get; set; }
}

public class Bank_Details
{
    public int Account_Number { get; set; } = 0;
    public string Type { get; set; } = string.Empty;
    public string Bank { get; set; } = string.Empty;
}

