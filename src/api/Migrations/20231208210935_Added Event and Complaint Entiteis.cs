using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace s12.Migrations
{
    /// <inheritdoc />
    public partial class AddedEventandComplaintEntiteis : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Complaints",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ComplaintDate = table.Column<DateTime>(name: "Complaint_Date", type: "datetime2", nullable: false),
                    ReporterId = table.Column<int>(name: "Reporter_Id", type: "int", nullable: false),
                    ReporterName = table.Column<string>(name: "Reporter_Name", type: "nvarchar(max)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MediaCollection = table.Column<string>(name: "Media_Collection", type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Complaints", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Events",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedDate = table.Column<DateTime>(name: "Created_Date", type: "datetime2", nullable: false),
                    UserId = table.Column<string>(name: "User_Id", type: "nvarchar(max)", nullable: false),
                    IsValidated = table.Column<bool>(name: "Is_Validated", type: "bit", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EventOwnerEmail = table.Column<string>(name: "Event_Owner_Email", type: "nvarchar(max)", nullable: false),
                    HasComplaints = table.Column<bool>(name: "Has_Complaints", type: "bit", nullable: false),
                    Complaints = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Goal = table.Column<int>(type: "int", nullable: false),
                    MoneyCollected = table.Column<decimal>(name: "Money_Collected", type: "decimal(18,2)", nullable: false),
                    Geo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MediaCollection = table.Column<string>(name: "Media_Collection", type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Events", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Complaints");

            migrationBuilder.DropTable(
                name: "Events");
        }
    }
}
