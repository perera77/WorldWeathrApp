import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { City } from '../City';
import { Forecast } from '../Forecast';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.css']
})
export class CityForecastComponent implements OnInit {
  @Input() set city(city: City) {
    if (this.city_ != city) {
      this.city_ = city;
      this.getForecast()
    }
  }

  city_: City;
  forecasts: Forecast[];
  ShowDetails: boolean = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getForecast(): void {
    this.weatherService.getForecast(this.city_.country, this.city_.name).subscribe(x => this.forecasts = x);
  }

  showHideDetails(): void { this.ShowDetails = !this.ShowDetails;}
}
