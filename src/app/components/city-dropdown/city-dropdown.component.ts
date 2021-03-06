import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';

import { WeatherService } from '../../services/weather.service';
import { CityItem } from '../../classes/city-item';
import { WeatherItem } from '../../classes/weather-item';

@Component({
  selector: 'app-city-dropdown',
  templateUrl: './city-dropdown.component.html',
  styleUrls: ['./city-dropdown.component.scss']
})
export class CityDropdownComponent implements OnInit {

  public cityList: Array<Object> = [];
  public weatherList: Array<WeatherItem> = [];

  constructor(private weatherService: WeatherService) {}

  onSearch(query: string) {
    if (!query) {
      return;
    };

    this.weatherService.searchCity({name: query}).subscribe(result => {
      this.cityList = result.map(
        (el) => {
          const fields = {
            name: el.formatted_address,
            lat: el.geometry.location.lat,
            lng: el.geometry.location.lng
          };

          return new CityItem(fields);
        }
      );
      console.log(this.cityList);
    });
  }

  onSelect(city: CityItem) {
    this.cityList = [];
    this.weatherService.getWeather(city).subscribe(result => {
      const fields = {
        city,
        description: result.weather[0].description,
        icon: result.weather[0].icon,
        temp: Math.floor(result.main.temp)
      }, weatherItem = new WeatherItem(fields);

      this.weatherService.updateWeatherList(weatherItem);
    });
  }

  onBlur() {
    this.cityList = [];
  }

  ngOnInit() {
  }

}
