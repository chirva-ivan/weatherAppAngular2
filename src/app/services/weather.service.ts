import { Injectable, EventEmitter } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { WeatherItem } from '../classes/weather-item';
import { WeatherList } from '../classes/weather-list';

@Injectable()
export class WeatherService {

  public weatherListEvent: EventEmitter<any> = new EventEmitter();
  public weatherList: WeatherList<WeatherItem> = [];

  constructor (private _http: Http) {}

  searchCity({name, lat, lng}: {name?: string, lat?: number, lng?: number}): Observable <any> {
    const url = `http://maps.googleapis.com/maps/api/geocode/json`,
      params = new URLSearchParams();

    if (name) {
      params.set('address', name);
    }

    if (lat && lng) {
      params.set('latlng', `${lat},${lng}`);
    }

    return this._http.get(url, { search: params })
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
    this.weatherListEvent.emit(item);
    this.weatherList.push(item);
  }

  getWeatherListEvent() {
    return this.weatherListEvent;
  }

  getWeatherList() {
    return this.weatherList;
  }
}
