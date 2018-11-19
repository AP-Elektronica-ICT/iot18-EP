using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class AddedUserModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Tags",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Anchors",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Anchors",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tags_UserId",
                table: "Tags",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Anchors_UserId",
                table: "Anchors",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Anchors_User_UserId",
                table: "Anchors",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Tags_User_UserId",
                table: "Tags",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Anchors_User_UserId",
                table: "Anchors");

            migrationBuilder.DropForeignKey(
                name: "FK_Tags_User_UserId",
                table: "Tags");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropIndex(
                name: "IX_Tags_UserId",
                table: "Tags");

            migrationBuilder.DropIndex(
                name: "IX_Anchors_UserId",
                table: "Anchors");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Tags");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Anchors");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Anchors");
        }
    }
}
