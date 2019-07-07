import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { City } from './City';
import { Forecast } from './Forecast';
import { Weather } from './Weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherUrl = 'api/Weather/';  // URL to web api
  private favariteCities: City[];

  constructor(private http: HttpClient) { }

  getCountries(): Observable<string[]> {
    return this.http.get<string[]>(this.weatherUrl + "Countries").pipe(
      tap(result => this.log(result)),catchError(this.handleError<string[]>('gtCountries', []))
    );
  }

  getCities(country: string): Observable<string[]> {
    const url = `${this.weatherUrl}Cities/?country=${country}`;
    return this.http.get<string[]>(url).pipe(
      tap(results => this.log(results)));
  }

  getFavariteCities(): City[] {
    return this.favariteCities;
  }

  AddFavariteCity(city: City): void {
    if (this.favariteCities == null)
      this.favariteCities = [];

    this.favariteCities.push(city);
  }

  getWeather(country: string, city: string): Observable<Weather> {
    const url = `${this.weatherUrl}Weather/?country=${country}&city=${city}`;
    return this.http.get<Weather>(url).pipe(
      tap(results => this.log(results)));
  }

  getForecast(country: string, city: string): Observable<Forecast[]> {
    const url = `${this.weatherUrl}Forecast/?country=${country}&city=${city}`;
    return this.http.get<Forecast[]>(url).pipe(
      tap(results => this.populateForcastTimes(results)), catchError(this.handleError<Forecast[]>('gtCountries', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

  private log<T>(val: T): void {

  }

  private populateForcastTimes(forecasts: Forecast[]): void {
    for (var i = 0; i < forecasts.length; i++) {
      forecasts[i].dateTime = new Date(forecasts[i].dt * 1000).toLocaleString();
    }
  }
}
