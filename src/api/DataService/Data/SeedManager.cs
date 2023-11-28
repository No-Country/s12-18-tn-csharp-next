using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using s12.DataService.Data;
using s12.Entities.DbSet;

public static class SeedManager
{
    public static async Task Seed(IServiceProvider services)
    {
        await SeedRoles(services);
    }

    private static async Task SeedRoles(IServiceProvider services)
    {
        var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();

        await roleManager.CreateAsync(new IdentityRole(Role.Admin));
        await roleManager.CreateAsync(new IdentityRole(Role.User));
    }

}