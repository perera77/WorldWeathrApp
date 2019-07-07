import { Component, OnInit, Input } from '@angular/core';

import { WeatherService } from '../weather.service';
import { City } from '../City';
import { Weather } from '../Weather';


@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {
  @Input() set city(city: City) {
    if (this.city_ != city) {
      this.city_ = city;
      this.getWeather()
    }
  }

  weather: Weather;
  city_: City;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getWeather(): void {
    this.weatherService.getWeather(this.city_.country, this.city_.name).subscribe(x => this.weather = x);
  }

  get CalculationDate(): string { return new Date(this.weather.time_of_data * 1000).toLocaleTimeString();}


}
