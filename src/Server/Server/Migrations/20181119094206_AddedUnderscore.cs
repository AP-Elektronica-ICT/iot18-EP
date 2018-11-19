using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class AddedUnderscore : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TagMac",
                table: "Measurements",
                newName: "Tag_Mac");

            migrationBuilder.RenameColumn(
                name: "AnchorMac",
                table: "Measurements",
                newName: "Anchor_Mac");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Tag_Mac",
                table: "Measurements",
                newName: "TagMac");

            migrationBuilder.RenameColumn(
                name: "Anchor_Mac",
                table: "Measurements",
                newName: "AnchorMac");
        }
    }
}
