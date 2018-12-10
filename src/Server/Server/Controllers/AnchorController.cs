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
        public IActionResult AddAnchor(Anchor item)
        {
            _context.Anchors.Add(item);

            if (_context.SaveChanges() > 0)
                return Ok();

            return NotFound();
        }

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<List<Anchor>> GetAll()
        {
            return _context.Anchors.ToList();
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult Delete(long id)
        {
            var anchor = _context.Anchors.Find(id);
            if (anchor == null)
                return NotFound();

            _context.Anchors.Remove(anchor);
            _context.SaveChanges();
            return Ok();

        }

        
    }
}