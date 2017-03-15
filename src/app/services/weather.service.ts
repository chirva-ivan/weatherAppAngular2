import { Injectable, EventEmitter } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { WeatherItem } from '../classes/weather-item';

@Injectable()
export class WeatherService {

  public listUpdated = new EventEmitter();
  private _weatherList: Array<WeatherItem> = [];

  constructor (private _http: Http) {}

  searchCity(cityName: string): Observable <any> {
    return this._http.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${cityName}`)
      .map((response) => {
        const data = response.json();
        return data.results;
      })
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
  }

  getWeather(city): Observable <any> {
    const url = `http://api.openweathermap.org/data/2.5/weather`,
      params = new URLSearchParams();

    params.set('lat', city.lat);
    params.set('lon', city.lng);
    params.set('APPID', 'c53269f6632df35d2665dbc13b3ab454');
    params.set('units', 'metric');

    return this._http.get(url, { search: params })
      .map((response) => {
        const data = response.json();
        return data;
      })
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
  }

  updateWeatherList(item: WeatherItem) {
    this._weatherList.push(item);
    this.listUpdated.emit('test');
    console.log('updateWeatherList');
  }

  getWeatherList() {
    return this._weatherList;
  }
}
