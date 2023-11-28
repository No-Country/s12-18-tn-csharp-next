using Microsoft.AspNetCore.Identity;

namespace s12.Entities.DbSet;

public class User : IdentityUser
{
    public string Name { get; set; } = string.Empty;

}

