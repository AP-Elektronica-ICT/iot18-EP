using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class Measurement
    {
        public long Id { get; set; }
        public string Anchor_Mac { get; set; }
        public string Tag_Mac { get; set; }
        public double Distance { get; set; }
    }
}
