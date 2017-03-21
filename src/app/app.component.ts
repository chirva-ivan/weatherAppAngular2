import { Component, OnInit } from '@angular/core';

import { WeatherService } from './services/weather.service';
import { CityItem } from './classes/city-item';
import { WeatherItem } from './classes/weather-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public markersList = this.weatherService.getWeatherList();
  public mapParams: any = {
    latitude: 59.9342802,
    longitude: 30.3350986,
    zoom: 8,
    disableDefaultUI: false,
    zoomControl: false
  };

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeatherListEvent()
      .subscribe(item => {
        this.zoomOnMarker(item.city.lat, item.city.lng);
    });
  }

  zoomOnMarker(lat, lng) {
    this.mapParams.latitude = lat;
    this.mapParams.longitude = lng;
  }

  mapClicked(event) {
    const coords = {
      lat: event.coords.lat,
      lng: event.coords.lng
    }, city = new CityItem(coords);

    this.weatherService.searchCity(coords).subscribe(result => {
      city.name = result[0].formatted_address;
    });

    this.weatherService.getWeather(city).subscribe(result => {
      const fields = {
        city,
        description: result.weather[0].description,
        icon: result.weather[0].icon,
        temp: Math.floor(result.main.temp),
        isOpen: true
      }, weatherItem = new WeatherItem(fields);

      this.markersList.push(weatherItem);
    });
  }
}
