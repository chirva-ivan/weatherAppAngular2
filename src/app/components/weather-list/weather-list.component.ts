import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import { WeatherItem } from '../../classes/weather-item';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  public weatherList: Array<WeatherItem> = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeatherList()
      .subscribe(item => {
        console.log(item);
        this.weatherList.push(item);
    });
  }

}
