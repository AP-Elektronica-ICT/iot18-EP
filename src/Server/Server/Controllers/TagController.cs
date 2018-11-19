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
    [Route("api/tags")]
    [ApiController]
    [EnableCors("AllowAllMethods")]
    public class TagController : Controller
    {
        private readonly DatabaseContext _context;
        public TagController(DatabaseContext context)
        {
            _context = context;
            if (_context.Tags.Count() == 0)
            {
                _context.Tags.Add(new Tag { Mac = "11:11:11:11" });
                _context.Tags.Add(new Tag { Mac = "22:22:22:22" });
                _context.SaveChanges();
            }
        }

        [HttpPost]
        public IActionResult Create(Tag item)
        {
            _context.Tags.Add(item);

            if (_context.SaveChanges() > 0)
                return Ok();

            return NotFound();
        }

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<List<Tag>> GetAll()
        {
            return _context.Tags.ToList();
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult Delete(long id)
        {
            var tag = _context.Tags.Find(id);
            if (tag == null)
                return NotFound();

            _context.Tags.Remove(tag);
            _context.SaveChanges();
            return Ok();
        }
    }
}