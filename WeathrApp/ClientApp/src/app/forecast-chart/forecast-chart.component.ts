import { Component, AfterViewInit, Input } from '@angular/core';

import { Forecast } from '../Forecast';

@Component({
  selector: 'app-forecast-chart',
  templateUrl: './forecast-chart.component.html',
  styleUrls: ['./forecast-chart.component.css']
})
export class ForecastChartComponent implements AfterViewInit {
  @Input() set Forecasts(forecasts: Forecast[]) {
    this.DataReady = false;
    this.forecasts_ = forecasts;
    this.populatData();
    this.DataReady = true;
  }

  forecasts_ : Forecast[];

  title = 'Temprature and Pressure';
  type = 'LineChart';
  
  columnNames = ["Date", "Temperature", "Pressure", "Humidity"];
  options = {
    series: {
      0: { targetAxisIndex: 0 },
      1: { targetAxisIndex: 1 }
    },
    vAxes: {
      // Adds titles to each axis.
      0: { title: 'Temps (Celsius) / Humidity (%)' },
      1: { title: 'Pressure (hPa)' }
    },
    hAxis: {
      title: 'Date/Time'
    }
  };
  width = 550;
  height = 800;
  data = [];
  DataReady: boolean = false;

  constructor() { }

  ngAfterViewInit() {
  }

  populatData(): void {
    this.data = [];
    for (var i = 0; i < this.forecasts_.length; i++) {
      this.data.push([this.forecasts_[i].dateTime, this.forecasts_[i].temp - 273, this.forecasts_[i].pressure, this.forecasts_[i].humidity]);
    }
  }
}
