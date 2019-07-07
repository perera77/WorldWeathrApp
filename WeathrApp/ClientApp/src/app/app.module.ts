import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { CityForecastComponent } from './city-forecast/city-forecast.component';
import { ForecastChartComponent } from './forecast-chart/forecast-chart.component';
import { ForecastWindChartComponent } from './forecast-wind-chart/forecast-wind-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    WeatherComponent,
    ForecastComponent,
    CityDetailComponent,
    CityWeatherComponent,
    CityForecastComponent,
    ForecastChartComponent,
    ForecastWindChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
