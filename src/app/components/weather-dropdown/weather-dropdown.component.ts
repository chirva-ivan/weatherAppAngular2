import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';

import { WeatherService } from '../../services/weather.service';
import { CityItem } from '../../classes/city-item';

@Component({
  selector: 'app-weather-dropdown',
  templateUrl: './weather-dropdown.component.html',
  styleUrls: ['./weather-dropdown.component.css'],
  providers: [WeatherService]
})
export class WeatherDropdownComponent implements OnInit {

  public cityList: Array<Object> = [];
  public selectedCity: CityItem = new CityItem({});

  constructor(private _weatherService: WeatherService) {}

  onSearch(event: string) {
    this._weatherService.searchCity(event).subscribe(result => {
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

  onSelect(event) {
    this.selectedCity = event;
    this.cityList = [];
  }

  ngOnInit() {
  }

}
