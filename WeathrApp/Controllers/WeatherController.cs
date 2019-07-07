using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeathrApp.Models;
using WeathrApp.Services;

namespace WeathrApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        private IWeatherService _weatherService;

        public WeatherController(IWeatherService weatherService)
        {
            _weatherService = weatherService;
        }

        [HttpGet("Countries")]
        public IEnumerable<string> GetCountries()
        {
            return _weatherService.GetCountries();
        }

        [HttpGet("Cities")]
        public IEnumerable<string> GetCities(string country)
        {
            return _weatherService.GetCities(country);
        }

        [HttpGet("Weather")]
        public async Task<IActionResult> GetWeatherAsync(string country, string city)
        {
            CityWeather weather = await _weatherService.GetWeatherAsync(country, city);
            if(weather == null)
                return BadRequest("Invalid client request");

            return Ok(new {main= weather.Weather.First().Main,
                description = weather.Weather.First().Description,
                temp = weather.Main.Temp - 273,
                pressure = weather.Main.Pressure,
                humidity = weather.Main.Humidity,
                visibility = weather.Visibility,
                wind_speed=weather.Wind.Speed,
                wind_direction=weather.Wind.Deg,
                time_of_data = weather.Dt // TimeZoneInfo.ConvertTime(DateTimeOffset.FromUnixTimeSeconds(weather.Dt), TimeZoneInfo.Local).ToString()
            });
        }

        [HttpGet("Forecast")]
        public async Task<IActionResult> GetForecastAsync(string country, string city)
        {
            CityForecast forecast = await _weatherService.GetForecastAsync(country, city);
            if (forecast == null)
                return BadRequest("Invalid client request");

            return Ok(forecast.List.Select(x => new { dt = x.Dt,
                main = x.Weather.First().Main,
                description = x.Weather.First().Description,
                temp = x.Main.Temp,
                pressure = x.Main.Pressure,
                humidity = x.Main.Humidity,
                wind_speed = x.Wind.Speed,
                wind_direction = x.Wind.Deg
            }));
        }
    }
}