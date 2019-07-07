import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from '../Forecast';

@Component({
  selector: 'app-forecast-wind-chart',
  templateUrl: './forecast-wind-chart.component.html',
  styleUrls: ['./forecast-wind-chart.component.css']
})
export class ForecastWindChartComponent implements OnInit {
  @Input() set Forecasts(forecasts: Forecast[]) {
    this.DataReady = false;
    this.forecasts_ = forecasts;
    this.populatData();
    this.DataReady = true;
  }

  forecasts_: Forecast[];

  title = 'Wind Forecasts';
  type = 'LineChart';

  columnNames = ["Date", "Wind speed", "Wind direction"];
  options = {
    series: {
      0: { targetAxisIndex: 0 },
      1: { targetAxisIndex: 1 }
    },
    vAxes: {
      // Adds titles to each axis.
      0: { title: 'Speed (m/s)' },
      1: { title: 'Direction (deg)' }
    },
    hAxis: {
      title: 'Date/Time'
    }
  };
  width = 550;
  height = 400;
  data = [];
  DataReady: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  populatData(): void {
    this.data = [];
    for (var i = 0; i < this.forecasts_.length; i++) {
      this.data.push([this.forecasts_[i].dateTime, this.forecasts_[i].wind_speed, this.forecasts_[i].wind_direction]);
    }
  }
}
