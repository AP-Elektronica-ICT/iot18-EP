using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Map> Maps { get; set; }
        public ICollection<Anchor> Anchors { get; set; }
        public ICollection<Tag> Tags { get; set; }
    }
}
