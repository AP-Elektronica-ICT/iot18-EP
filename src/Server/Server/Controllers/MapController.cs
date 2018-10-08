using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Microsoft.AspNetCore.Cors;

namespace Server.Models
{
    [Route("api/map")]
    
    public class MapController : Controller
    {
        private readonly DatabaseContext _context;
        public MapController(DatabaseContext context)
        {
            _context = context;
            if (_context.Coordinate.Count() == 0)
            {
                _context.Coordinate.Add(new Coordinate { TagId = "1", XPos = 60, YPos = 100 });
                _context.Coordinate.Add(new Coordinate { TagId = "2", XPos = 20, YPos = 150 });
                _context.Coordinate.Add(new Coordinate { TagId = "3", XPos = 150, YPos = 50 });
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public ActionResult<List<Coordinate>> GetAll()
        {
            return _context.Coordinate.ToList();
        }


        public IActionResult Index()
        {
            return View();
        }
    }
}