using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.DatabaseSettings
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }
        public DbSet<TodoItem> TodoItem { get; set; }
        public DbSet<Coordinate> Coordinate { get; set; }
        public DbSet<Measurement> Measurement { get; set; }
        public DbSet<Tag> Tag { get; set; }
        public DbSet<Anchor> Anchor { get; set; }
    }      
}
