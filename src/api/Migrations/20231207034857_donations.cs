using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace s12.Migrations
{
    /// <inheritdoc />
    public partial class donations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Donations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EventId = table.Column<int>(name: "Event_Id", type: "int", nullable: false),
                    OwnerEmail = table.Column<string>(name: "Owner_Email", type: "nvarchar(max)", nullable: false),
                    DonorName = table.Column<string>(name: "Donor_Name", type: "nvarchar(max)", nullable: false),
                    DonorEmail = table.Column<string>(name: "Donor_Email", type: "nvarchar(max)", nullable: false),
                    DonationAmount = table.Column<decimal>(name: "Donation_Amount", type: "decimal(18,2)", nullable: false),
                    DonationDate = table.Column<string>(name: "Donation_Date", type: "nvarchar(max)", nullable: false),
                    PaymentId = table.Column<string>(name: "Payment_Id", type: "nvarchar(max)", nullable: true),
                    DonationMessage = table.Column<string>(name: "Donation_Message", type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Donations", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Donations");
        }
    }
}
