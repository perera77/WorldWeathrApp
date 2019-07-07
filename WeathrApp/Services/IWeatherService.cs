using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WeathrApp.Models;

namespace WeathrApp.Services
{
    public interface IWeatherService
    {
        IEnumerable<string> GetCountries();
        IEnumerable<string> GetCities(string country);

        Task<CityWeather> GetWeatherAsync(string country, string city);
        Task<CityForecast> GetForecastAsync(string country, string city);
    }
}
