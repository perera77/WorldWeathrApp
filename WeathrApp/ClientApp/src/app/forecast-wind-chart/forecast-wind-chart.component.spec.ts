import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastWindChartComponent } from './forecast-wind-chart.component';

describe('ForecastWindChartComponent', () => {
  let component: ForecastWindChartComponent;
  let fixture: ComponentFixture<ForecastWindChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastWindChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastWindChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
