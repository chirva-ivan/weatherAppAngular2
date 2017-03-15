import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import { WeatherItem } from '../../classes/weather-item';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
  providers: [WeatherService]
})
export class WeatherListComponent implements OnInit {

  public weatherList: Array<WeatherItem>;

  constructor(private _weatherService: WeatherService) {
    _weatherService.listUpdated.subscribe((event) => {
      this.weatherList = this._weatherService.getWeatherList();
      console.log(event);
    });
  }

  ngOnInit() {
  }

}
