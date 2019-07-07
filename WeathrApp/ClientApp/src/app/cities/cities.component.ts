import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';
import { City } from '../City';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  showAvailableCities: boolean = false;
  showCountryList: boolean = false;
  countryList : string[] = [];
  availableCities: string[] = [];
  selectedCity: City;
  selectedCountry: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.weatherService.getCountries().subscribe(countryList =>  this.countryList = countryList);
  }

  countrySelected(name: string): void {
    this.selectedCountry = name;
    this.weatherService.getCities(name).subscribe(cityList => this.availableCities = cityList);
    this.showAvailableCities = true;
  }

  get FavariteCityList(): City[] { return this.weatherService.getFavariteCities(); }

  addCity(cityName: string): void {
    var city: City = new City();
    city.country = this.selectedCountry;
    city.name = cityName;
    this.weatherService.AddFavariteCity(city);

    this.showCountryList = false;
    this.showAvailableCities = false;
  }


  selectCity(city: City): void {
    this.selectedCity = city;
  }

  removeCity(city: City): void {

  }
}
