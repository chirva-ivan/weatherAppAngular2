import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
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
}
