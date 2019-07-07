import { Component, OnInit, Input } from '@angular/core';

import { City } from '../City';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  @Input() city: City;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeatherDetail();
  }

  getWeatherDetail(): void {
   
  }
}
