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
  styleUrls: ['./city-dropdown.component.css']
})
export class CityDropdownComponent implements OnInit {

  public cityList: Array<Object> = [];
  public selectedCity: CityItem = new CityItem({});
  public weatherList: Array<WeatherItem> = [];

  constructor(private weatherService: WeatherService) {}

  onSearch(query: string) {
    this.weatherService.searchCity(query).subscribe(result => {
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
    this.selectedCity = city;
    this.cityList = [];
    this.weatherService.getWeather(city).subscribe(result => {
      const fields = {
        city,
        description: result.weather[0].description,
        temp: Math.floor(result.main.temp)
      }, weatherItem = new WeatherItem(fields);

      this.weatherService.updateWeatherList(weatherItem);
    });
  }

  ngOnInit() {
  }

}
