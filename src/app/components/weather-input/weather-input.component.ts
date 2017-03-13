import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service'

@Component({
  selector: 'app-weather-input',
  templateUrl: './weather-input.component.html',
  styleUrls: ['./weather-input.component.css'],
  providers: [WeatherService]
})
export class WeatherInputComponent implements OnInit {

  public cityName: string = '';
  public cityList: Array<Object> = [];

  constructor(private _weatherService: WeatherService) {}

  search(text: any) {
    let self = this;

    self.cityName = text;
    self._weatherService.searchCity(self.cityName).subscribe(
      (data) => {
        self.cityList = data;
        console.log(self.cityList)
      }
    );
  }

  ngOnInit() {
  }

}
