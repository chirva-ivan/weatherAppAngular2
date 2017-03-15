import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';

import { WeatherService } from '../../services/weather.service';
import { CityItem } from '../../classes/city-item';

@Component({
  selector: 'app-city-dropdown',
  templateUrl: './city-dropdown.component.html',
  styleUrls: ['./city-dropdown.component.css'],
  providers: [WeatherService]
})
export class CityDropdownComponent implements OnInit {

  public cityList: Array<Object> = [];
  public selectedCity: CityItem = new CityItem({});

  constructor(private _weatherService: WeatherService) {}

  onSearch(query: string) {
    this._weatherService.searchCity(query).subscribe(result => {
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
    this._weatherService.getWeather(city).subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit() {
  }

}
