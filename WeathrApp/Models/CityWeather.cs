﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WeathrApp.Models
{
    public class CityWeather
    {
        public class Coordinates
        {
            public decimal Lon { get; set; }
            public decimal Lat { get; set; }
        }

        public class WeatherCondition
        {
            public int Id { get; set; }
            public string Main { get; set; }
            public string Description { get; set; }
            public string Icon { get; set; }
        }

        public class WeatherDetail
        {
            public decimal Temp { get; set; }
            public decimal Pressure { get; set; }
            public int Humidity { get; set; }
            public decimal Temp_min { get; set; }
            public decimal Temp_max { get; set; }
        }

        public class WindCondition
        {
            public decimal Speed { get; set; }
            public decimal Deg { get; set; }
        }

        public class Cloudiness
        {
            public int All { get; set; }
        }

        public Coordinates Coord { get; set; }
        public IEnumerable<WeatherCondition> Weather { get; set; }

        //public string Base { get; set; }
        public WeatherDetail Main { get; set; }
        public int Visibility { get; set; }
        public WindCondition Wind { get; set; }
        public Cloudiness Clouds { get; set; }

        public int Dt { get; set; } // Time of data calculation, unix, UTC
        
    }
}
