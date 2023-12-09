using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace s12.Migrations
{
    /// <inheritdoc />
    public partial class AddedEventIdToComplaint : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Event_Id",
                table: "Complaints",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Event_Id",
                table: "Complaints");
        }
    }
}
