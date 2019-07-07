
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using WeathrApp.Models;

namespace WeathrApp.Services
{
    public class WeatherService : IWeatherService
    {
        private IEnumerable<City> CityList;
        static HttpClient client = new HttpClient();

        public WeatherService()
        {
            
            using (StreamReader file = File.OpenText("D:\\dev\\WeathrApp\\WeathrApp\\data\\city.list.json"))
            {
                string json = file.ReadToEnd();
                CityList = JsonConvert.DeserializeObject<IEnumerable<City>>(json);
            }
        }

        public IEnumerable<string> GetCountries()
        {
            return CityList.Select(x => x.Country).Distinct().OrderBy(x => x);
        }

        public IEnumerable<string> GetCities(string country)
        {
            return CityList.Where(x => x.Country.Equals(country, StringComparison.CurrentCultureIgnoreCase)).Select(x => x.Name).Distinct().OrderBy(x=>x);
        }

        public async Task<CityWeather> GetWeatherAsync(string country, string cityName)
        {
            CityWeather weather = null;
            City city = CityList.FirstOrDefault(x => string.Equals(x.Country, country, StringComparison.CurrentCultureIgnoreCase) && string.Equals(x.Name, cityName, StringComparison.CurrentCultureIgnoreCase));
            if (city != null)
            {
                string url = $"https://api.openweathermap.org/data/2.5/weather?id={city.Id}&appid=0af7a4141c41b6c9b2a106d3094e6c57";
                HttpResponseMessage response = await client.GetAsync(url);
                if (response.IsSuccessStatusCode)
                {
                    weather = await response.Content.ReadAsAsync<CityWeather>();
                }
            }
            return weather;
        }

        public async Task<CityForecast> GetForecastAsync(string country, string cityName)
        {
            CityForecast forecast = null;
            City city = CityList.FirstOrDefault(x => string.Equals(x.Country, country, StringComparison.CurrentCultureIgnoreCase) && string.Equals(x.Name, cityName, StringComparison.CurrentCultureIgnoreCase));
            if (city != null)
            {
                string url = $"https://api.openweathermap.org/data/2.5/forecast?id={city.Id}&appid=0af7a4141c41b6c9b2a106d3094e6c57"; ;
                HttpResponseMessage response = await client.GetAsync(url);
                if (response.IsSuccessStatusCode)
                {
                    forecast = await response.Content.ReadAsAsync<CityForecast>();
                }
            }
            return forecast;
        }
    }
}
