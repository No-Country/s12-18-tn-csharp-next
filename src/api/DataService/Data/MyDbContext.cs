using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using s12.Entities.DbSet;

namespace s12.DataService.Data;

public class MyDbContext : IdentityDbContext<User>
{
    public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
    {
    }

    public DbSet<Donation> Donations { get; set; }
    public DbSet<Event> Events { get; set; }
    public DbSet<Complaint> Complaints { get; set; }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder
            .Entity<User>()
            .OwnsOne(u => u.Bank_Details, builder =>
            {
                builder.ToJson();
            });

        builder
           .Entity<Event>()
           .Property(m => m.Event_Id)
           .UseIdentityColumn();
        
        builder
            .Entity<Event>()
            .OwnsOne(e => e.Geo, builder =>
            {
                builder.ToJson();
            })
            .OwnsMany(e => e.Media, builder =>
            {
                builder.ToJson();
            }).HasKey(c => c.Event_Id); ;


        builder
            .Entity<Complaint>()
            .OwnsMany(e => e.Media, builder =>
            {
                builder.ToJson();
            })
            .HasKey( c => c.Complaint_Id);

        builder
            .Entity<Complaint>()
            .Property(c => c.Complaint_Id)
            .UseIdentityColumn();
    }
}