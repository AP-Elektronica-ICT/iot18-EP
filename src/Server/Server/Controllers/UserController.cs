using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace Server.Controllers
{
    
    [ApiController]
    public class UserController : Controller
    {
        private readonly DatabaseContext _context;
        public UserController(DatabaseContext context)
        {
            _context = context;
            //if (_context.Tags.Count() == 0)
            //{
            //    _context.Tags.Add(new Tag { Mac = "11:11:11:11" });
            //    _context.Tags.Add(new Tag { Mac = "22:22:22:22" });
            //    _context.SaveChanges();
            //}
        }
        [HttpGet]
        [Route("api/picturemap/{userId}")]
        public ActionResult GetMap(int userId)
        {
            var maps = _context.Maps.ToList().Where(d => d.User.Id == userId);
            if (maps != null)
                return Ok(maps);
            return NotFound();
        }
    }

   
}