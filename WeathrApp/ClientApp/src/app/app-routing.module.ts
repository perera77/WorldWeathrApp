import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesComponent } from './cities/cities.component';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { CityDetailComponent } from './city-detail/city-detail.component';

const routes: Routes = [
  { path: 'cities', component: CitiesComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'forecasts', component: ForecastComponent },
  { path: '', redirectTo: '/cities', pathMatch: 'full' },

  { path: 'city-detail/:city', component: CityDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
