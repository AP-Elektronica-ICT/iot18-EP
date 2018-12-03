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
        public IActionResult GetCoordinates(long userId, long mapId)
        {
            coordinates = new List<Coordinate>();

            var map = _context.Maps.Find(mapId);

            //lijst van tags voor bepaalde user
            IQueryable<Tag> tag_query = _context.Tags;
            var tags = tag_query.Where(d => d.User.Id == userId);
            foreach (var tag in tags)
            {
                List<Measurement> measurements = new List<Measurement>();

                //alle metingen doorzoeken naar een bepaalde tag

                List<Data> dataList = new List<Data>();

                //lijst van anchors van bepaalde user
                IQueryable<Anchor> anchor_query = _context.Anchors;
                var anchors = anchor_query.Where(d => d.User.Id == userId)
                                          .Select(e => new Anchor
                                          {
                                              X_Pos = e.X_Pos,
                                              Y_Pos = e.Y_Pos,
                                              Mac = e.Mac
                                          });


                foreach (var anchor in anchors)
                {
                    try
                    {
                        IQueryable<Measurement> query = _context.Measurements;
                        var data = query.Where(a => a.Mac_Anchor == anchor.Mac)
                                        .Where(t => t.Mac_Tag == tag.Mac);

                        if (!data.Any())
                            return NotFound("Empty");
                        else
                            return Ok("Not empty");
                    }
                    catch (Exception e)
                    { return NotFound(e.ToString()); }
                    //if (data == null)
                    //    return NotFound("jaaa");

                    //double distance = data.Max<Measurement>(x => x.Distance);

                    //dataList.Add(new Data { X_Pos = anchor.X_Pos, Y_Pos = anchor.Y_Pos, Distance = distance });
                }

                return Ok(dataList);
            










                //    //cirkelberekening

                //    int xPos = 0;
                //    int yPos = 0;
                //    bool status = true;

                //    Coordinate coordinate = new Coordinate();
                //    coordinate.Tag = tag;
                //    coordinate.X_Pos = xPos;
                //    coordinate.Y_Pos = yPos;
                //    coordinate.Status = status;

                //    coordinates.Add(coordinate);

                //}

                //if (coordinates == null)
                //    return NotFound();
                //return Ok(coordinates);
            }
            return NotFound();
           
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
        public long Tag_Id { get; set; }
        public string Tag_Mac { get; set; }
        public int X_Pos { get; set; }
        public int Y_Pos { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
        public int Stroke { get { return 5; } } //moet van Jens
    }

    public class Data
    {
        public double Distance { get; set; }
        public int X_Pos { get; set; }
        public int Y_Pos { get; set; }
    }

    
}