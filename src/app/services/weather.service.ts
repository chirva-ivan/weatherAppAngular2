import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
  constructor (private _http: HttpModule) {}

  searchCity(cityName: string) {
    // return this._http.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${cityName}`)
    //   .map((response) => {
    //     let data = response.json();
    //
    //     return data.results.map(
    //       (el) => {
    //         let fields = {
    //           formatted_address: el.formatted_address,
    //           lat: el.geometry.location.lat,
    //           lng: el.geometry.location.lng
    //         };
    //
    //         return new CityItem(fields);
    //       }
    //     );
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     return Observable.throw(error.json())
    //   });
    console.log(cityName);
    return cityName;
  }
}
