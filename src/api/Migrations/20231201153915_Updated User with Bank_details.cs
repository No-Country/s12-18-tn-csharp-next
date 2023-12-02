using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace s12.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedUserwithBank_details : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsVerified",
                table: "AspNetUsers",
                newName: "Is_Verified");

            migrationBuilder.RenameColumn(
                name: "IsOng",
                table: "AspNetUsers",
                newName: "Is_Ong");

            migrationBuilder.RenameColumn(
                name: "IsDeleted",
                table: "AspNetUsers",
                newName: "Is_Deleted");

            migrationBuilder.RenameColumn(
                name: "IsBanned",
                table: "AspNetUsers",
                newName: "Is_Banned");

            migrationBuilder.RenameColumn(
                name: "DateOfBirth",
                table: "AspNetUsers",
                newName: "Date_Of_Birth");

            migrationBuilder.AddColumn<string>(
                name: "Bank_Details",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Bank_Details",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "Is_Verified",
                table: "AspNetUsers",
                newName: "IsVerified");

            migrationBuilder.RenameColumn(
                name: "Is_Ong",
                table: "AspNetUsers",
                newName: "IsOng");

            migrationBuilder.RenameColumn(
                name: "Is_Deleted",
                table: "AspNetUsers",
                newName: "IsDeleted");

            migrationBuilder.RenameColumn(
                name: "Is_Banned",
                table: "AspNetUsers",
                newName: "IsBanned");

            migrationBuilder.RenameColumn(
                name: "Date_Of_Birth",
                table: "AspNetUsers",
                newName: "DateOfBirth");
        }
    }
}
