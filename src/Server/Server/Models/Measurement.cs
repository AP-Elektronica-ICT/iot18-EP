using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class Measurement
    {
        public long Id { get; set; }
        public string AnchorId { get; set; }
        public string TagId { get; set; }
        public double Distance { get; set; }
    }
}
