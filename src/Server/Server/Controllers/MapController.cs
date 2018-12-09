using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Server.Algorithm;

namespace Server.Controllers
{
    [Route("api/map")]
    [EnableCors("AllowAllMethods")]
    public class MapController : Controller
    {
        private List<Coordinate> coordinates;
        private readonly DatabaseContext _context;
        public MapController(DatabaseContext context)
        {
             
           _context = context;
            //if (_context.Coordinates.Count() == 0)
            //{
            //    _context.Coordinates.Add(new Coordinate { TagId = "1", XPos = 123132132, YPos = 100, Stroke = 5 });
            //    _context.Coordinates.Add(new Coordinate { TagId = "2", XPos = 20, YPos = 150, Stroke = 5 });
            //    _context.Coordinates.Add(new Coordinate { TagId = "3", XPos = 150, YPos = 50, Stroke = 5 });
            //    _context.SaveChanges();
            //}
        }




        [Route("{userId}/{mapId}")]
        [HttpGet]
        public IActionResult GetCoordinates(int userId, long mapId)
        {
            coordinates = new List<Coordinate>();

            var map = _context.Maps.Find(mapId);

            //lijst van tags voor bepaalde user
            IQueryable<Tag> tag_query = _context.Tags;
            //var tags = tag_query.Where(d => d.User.Id == userId);
            List<Tag> tags = _context.Tags
                           .Where(d => d.User.Id == userId)
                           .Where(m => m.Map.Id == mapId)
                           .Select(e => new Tag
                           {
                               Id = e.Id,
                               Mac = e.Mac,
                               Description = e.Description
                           })
                           .ToList();

            IQueryable<Anchor> anchor_query = _context.Anchors;
            List<Anchor> anchors = anchor_query
                                      .Where(d => d.User.Id == userId)
                                      .Where(m => m.Map.Id == mapId)
                                      .Select(e => new Anchor
                                      {
                                          X_Pos = e.X_Pos,
                                          Y_Pos = e.Y_Pos,
                                          Mac = e.Mac
                                      })
                                      .ToList();

            //return Ok(anchors);
            
            foreach (var tag in tags)
            {
                List<Data> dataList = new List<Data>();
                foreach (var anchor in anchors)
                {
                    IQueryable<Measurement> query = _context.Measurements;
                    List<Measurement> measurements = query.Where(a => a.Mac_Anchor == anchor.Mac)
                                    .Where(t => t.Mac_Tag == tag.Mac)
                                    .ToList();
                    foreach(var measurement in measurements)
                    {
                        dataList.Add(new Data
                        {
                            X_Pos = anchor.X_Pos / 100,
                            Y_Pos = anchor.Y_Pos / 100,
                            Distance = measurement.Distance / 100
                        });
                    }
                }
               
                double[] pos = Algorithm.Algorithm.Calculate(dataList);
                int xPos = (int)((pos[0] * 100) / map.Width * 100);
                int yPos = (int)((pos[1] * 100) / map.Length * 100);
                coordinates.Add(new Coordinate
                {
                    Tag = tag,
                    X_Pos = xPos,
                    Y_Pos = yPos
                });


            }

            return Ok(coordinates);
           
        }





        [HttpPut]
        public IActionResult Create([FromBody] User user)
        {
            var oldMap = _context.Users.Find(user.Id);
            if (oldMap == null)
                return NotFound();

            //oldMap.Map = user.Map;
            _context.Users.Update(oldMap);
            _context.SaveChanges();
            return Ok(oldMap);
        }


        public IActionResult Index()
        {
            return View();
        }
    }

    
    public class Coordinate
    {
        public Tag Tag { get; set; }
        public double X_Pos { get; set; }
        public double Y_Pos { get; set; }
        public bool Status { get { return true; } }
        public int Stroke { get { return 5; } } //moet van Jens
    }

    public class Data
    {
        public double Distance { get; set; }
        public int X_Pos { get; set; }
        public int Y_Pos { get; set; }
    }

    
}