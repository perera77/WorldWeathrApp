import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';
import { City } from '../City';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  get FavariteCityList(): City[] { return this.weatherService.getFavariteCities(); }

}
