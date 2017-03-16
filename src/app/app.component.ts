import { Component, OnInit } from '@angular/core';

import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public markersList: Array<any> = [];
  public mapParams: any = {
    latitude: 59.9342802,
    longitude: 30.3350986,
    zoom: 8,
    disableDefaultUI: false,
    zoomControl: false
  };

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeatherList()
      .subscribe(item => {
        this.markersList.push(item);
        this.zoomOnMarker(item.city.lat, item.city.lng);
    });
  }

  zoomOnMarker(lat, lng) {
    this.mapParams.latitude = lat;
    this.mapParams.longitude = lng;
  }
}
