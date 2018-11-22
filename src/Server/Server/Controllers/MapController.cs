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
    [EnableCors("AllowAllMethods")]
    public class MapController : Controller
    {
        
        private readonly DatabaseContext _context;
        public MapController(DatabaseContext context)
        {
             
           _context = context;
            if (_context.Coordinates.Count() == 0)
            {
                _context.Coordinates.Add(new Coordinate { TagId = "1", XPos = 123132132, YPos = 100, Stroke = 5 });
                _context.Coordinates.Add(new Coordinate { TagId = "2", XPos = 20, YPos = 150, Stroke = 5 });
                _context.Coordinates.Add(new Coordinate { TagId = "3", XPos = 150, YPos = 50, Stroke = 5 });
                _context.SaveChanges();
            }
        }



        [HttpGet]
        public ActionResult<List<Coordinate>> GetAll()
        {

            return _context.Coordinates.ToList();
        }



        [HttpPut]
        public IActionResult Create([FromBody] User user)
        {
            var oldMap = _context.Users.Find(user.Id);
            if (oldMap == null)
                return NotFound();

            oldMap.Map = user.Map;
            _context.Users.Update(oldMap);
            _context.SaveChanges();
            return Ok(oldMap);
        }


        public IActionResult Index()
        {
            return View();
        }
    }


}