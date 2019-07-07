import { Component, OnInit, Input } from '@angular/core';

import { WeatherService } from '../weather.service';
import { City } from '../City';
import { Forecast } from '../Forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  get FavariteCityList(): City[] { return this.weatherService.getFavariteCities(); }
}
