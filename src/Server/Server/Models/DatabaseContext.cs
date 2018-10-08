using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Server.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }
        public DbSet<TodoItem> TodoItem { get; set; }
        public DbSet<Coordinate> Coordinate { get; set; }
        public DbSet<Measurement> Measurement { get; set; }
    }      
}
