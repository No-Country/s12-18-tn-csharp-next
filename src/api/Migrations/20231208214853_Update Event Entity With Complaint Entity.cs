using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace s12.Migrations
{
    /// <inheritdoc />
    public partial class UpdateEventEntityWithComplaintEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Complaints",
                table: "Events");

            migrationBuilder.AddColumn<int>(
                name: "EventId",
                table: "Complaints",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Complaints_EventId",
                table: "Complaints",
                column: "EventId");

            migrationBuilder.AddForeignKey(
                name: "FK_Complaints_Events_EventId",
                table: "Complaints",
                column: "EventId",
                principalTable: "Events",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Complaints_Events_EventId",
                table: "Complaints");

            migrationBuilder.DropIndex(
                name: "IX_Complaints_EventId",
                table: "Complaints");

            migrationBuilder.DropColumn(
                name: "EventId",
                table: "Complaints");

            migrationBuilder.AddColumn<string>(
                name: "Complaints",
                table: "Events",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
