using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }
        public DbSet<TodoItem> TodoItems { get; set; }
        //public DbSet<Coordinate> Coordinates { get; set; }
        public DbSet<Measurement> Measurements { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Anchor> Anchors { get; set; }
        public DbSet<User> User { get; set; }
    }      
}
