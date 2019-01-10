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
    [Route("api/demo")]
    [EnableCors("AllowAllMethods")]
    public class DemoController : Controller
    {
        private readonly DatabaseContext _context;
        public DemoController(DatabaseContext context)
        {
            _context = context;
            //if (_context.Measurements.Count() == 0)
            //{
            //    _context.Measurements.Add(new Measurements { AnchorMac = "11:11:11:11", TagMac = "11:11:11:11", Distance = 2.31 });
            //    _context.Measurements.Add(new Measurements { AnchorMac = "22:22:22:22", TagMac = "22:22:22:22", Distance = 4.25 });
            //    _context.SaveChanges();
            //}
        }

        [Route("map")]
        [HttpGet]
        public IActionResult GetMap()
        {
            long id = 0;
            Map map = _context.Maps.Find(id);
            return Ok(map);
        }

        [HttpGet]
        public IActionResult GetCoordinates()
        {
            List<Coordinate> coordinates = new List<Coordinate>();
            List<Data> dataList = new List<Data>();



            Tag tag = new Tag
            {
                Id = 13,
                Mac = "TAG5",
                Description = "demo"
            };
            int posAnchor = 250;

            var measurements = _context.Demos.ToList();

            dataList.Add(new Data { Distance = measurements[0].Distance, X_Pos = 0, Y_Pos = 0 });
            dataList.Add(new Data { Distance = measurements[1].Distance, X_Pos = 250, Y_Pos = 0 });
            dataList.Add(new Data { Distance = measurements[2].Distance, X_Pos = 250, Y_Pos = 250 });
            if (dataList.Count() > 0)
            {

                double[] pos = Algorithm.Algorithm.Calculate(dataList);

                //int xPos = (int)((pos[0]) / (map.Width / 100));
                //int yPos = (int)((pos[1]) / (map.Length / 100));

                double widthFactor = 250 / 100.0;
                double heightFactor = 250 / 100.0;

                double xPos = pos[0] / widthFactor;
                double yPos = pos[1] / heightFactor;

                coordinates.Add(new Coordinate
                {
                    Tag = tag,
                    X_Pos = xPos,
                    Y_Pos = yPos
                });
            }

            return Ok(coordinates);

        }
    }
}