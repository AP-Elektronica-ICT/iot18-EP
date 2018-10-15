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
    public class MeasurementController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public MeasurementController(DatabaseContext context)
        {
            _context = context;
            //if (_context.Measurement.Count() == 0)
            //{
            //    _context.Measurement.Add(new Measurement { AnchorMac = "11:11:11:11", TagMac = "11:11:11:11", Distance = 2.31});
            //    _context.Measurement.Add(new Measurement { AnchorMac = "22:22:22:22", TagMac = "22:22:22:22", Distance = 4.25 });
            //    _context.SaveChanges();
            //}
        }

        [HttpPost]
        public IActionResult Create(Measurement item)
        {
            _context.Measurement.Add(item);
            _context.SaveChanges();

            return CreatedAtRoute("GetMeasurement", new { id = item.Id }, item);
        }

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<List<Measurement>> GetAll()
        {
            return _context.Measurement.ToList();
        }



    }
}