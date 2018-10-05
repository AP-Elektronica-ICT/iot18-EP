using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Server.Models
{
    [Route("api/[controller]")]
    public class MapController : Controller
    {
        private readonly DatabaseContext _context;
        public MapController(DatabaseContext context)
        {
            _context = context;
            if (_context.TodoItem.Count() == 0)
            {
                _context.TodoItem.Add(new TodoItem { Name = "item1" });
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public ActionResult<TagCo>> GetAll()
        {
            return _context.to
        }


        public IActionResult Index()
        {
            return View();
        }
    }
}