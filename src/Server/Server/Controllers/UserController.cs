using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        [HttpGet]
        public ActionResult GetCo()
        {
            List<Test> testje = new List<Test>();
            testje.Add(new Test { Id = 1, XPos = 700, YPos = 200, Mac = "jkmjklmjkm" });
            testje.Add(new Test { Id = 2, XPos = 400, YPos = 400, Mac = "ejkmclpois" });
            testje.Add(new Test { Id = 3, XPos = 590, YPos = 120, Mac = "dsweezeezds" });

            return Ok(testje);
        }
    }

    public class Test
    {
        public long Id { get; set; }
        public int XPos { get; set; }
        public int YPos { get; set; }
        public string Mac { get; set; }
        public int Stroke { get { return 5; } }
        public string Description { get { return ""; } }
        public bool Status { get { return true; } }
        public string LastActive { get { return "Teste"; } }

    }
}