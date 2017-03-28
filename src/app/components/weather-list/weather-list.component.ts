import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import { WeatherItem } from '../../classes/weather-item';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {

  public weatherList = this.weatherService.getWeatherList();
  public key = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeatherListEvent()
      .subscribe(() => { });
  }

  sortBy(key) {
    this.weatherList.sortBy(key);
    this.key = key;
  }
}
