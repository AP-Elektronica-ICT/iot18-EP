using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.DatabaseSettings;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowAllMethods")]
    public class TodoController : Controller
    {
        private readonly DatabaseContext _context;
        public TodoController(DatabaseContext context)
        {
            _context = context;
            if(_context.TodoItem.Count() == 0)
            {
                _context.TodoItem.Add(new TodoItem { Name = "item1" });
                _context.SaveChanges();
            }
        }
        

        [HttpPost]
        public IActionResult Create(TodoItem item)
        {
            _context.TodoItem.Add(item);
            _context.SaveChanges();

            return CreatedAtRoute("GetTodo", new { id = item.Id }, item);
        }

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<List<TodoItem>> GetAll()
        {
            return _context.TodoItem.ToList();
        }



        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        
        

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
