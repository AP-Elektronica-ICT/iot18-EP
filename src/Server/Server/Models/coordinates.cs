using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class Coordinates
    {
        public long Id { get; set; }
        public string TagId { get; set; }
        public string XPos { get; set; }
        public string YPos { get; set; }
    }
}
