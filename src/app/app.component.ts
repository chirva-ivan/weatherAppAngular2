import { Component, OnInit } from '@angular/core';

import { MapService } from './services/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public markersList: Array<any> = [];
  public initialMapParams: object = {
    latitude: 59.9342802,
    longitude: 30.3350986,
    zoom: 8,
    disableDefaultUI: false,
    zoomControl: false
  };

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.mapService.getMarkers()
      .subscribe(item => {
        console.log(item);
        this.markersList.push(item);
    });
  }
}
