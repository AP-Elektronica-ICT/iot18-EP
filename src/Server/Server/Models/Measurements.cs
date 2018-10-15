using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class Measurements
    {
        public long Id { get; set; }
        public string AnchorMac { get; set; }
        public string TagMac { get; set; }
        public double Distance { get; set; }
    }
}
