using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.DatabaseSettings;

namespace Server.Controllers
{
    [Route("api/anchors")]
    [ApiController]
    [EnableCors("AllowAllMethods")]
    public class AnchorController : Controller
    {
        private readonly DatabaseContext _context;
        public AnchorController(DatabaseContext context)
        {
            _context = context;
            //if (_context.Tags.Count() == 0)
            //{
            //    _context.Tags.Add(new Tags { Mac = "11:11:11:11" });
            //    _context.Tags.Add(new Tags { Mac = "22:22:22:22" });
            //    _context.SaveChanges();
            //}
        }

        [HttpPost]
        public IActionResult Create(Anchor item)
        {
            _context.Anchor.Add(item);

            if (_context.SaveChanges() > 0)
                return Ok();

            return NotFound();
        }

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<List<Anchor>> GetAll()
        {
            return _context.Anchor.ToList();
        }
    }
}