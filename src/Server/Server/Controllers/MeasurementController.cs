using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/measurements")]
    [ApiController]
    [EnableCors("AllowAllMethods")]
    public class MeasurementController : Controller
    {
        private readonly DatabaseContext _context;
        public MeasurementController(DatabaseContext context)
        {
            _context = context;
            //if (_context.Measurements.Count() == 0)
            //{
            //    _context.Measurements.Add(new Measurements { AnchorMac = "11:11:11:11", TagMac = "11:11:11:11", Distance = 2.31 });
            //    _context.Measurements.Add(new Measurements { AnchorMac = "22:22:22:22", TagMac = "22:22:22:22", Distance = 4.25 });
            //    _context.SaveChanges();
            //}
        }

        [HttpPost]
        public IActionResult Create(Measurement item)
        {
            _context.Measurements.Add(item);

            if (_context.SaveChanges() > 0)
                return Ok();

            return NotFound();
        }

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<List<Measurement>> GetAll()
        {
            return _context.Measurements.ToList();
        }



    }
}