import { Component, OnInit } from '@angular/core';

import { MapService } from './services/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public markersList: Array<any> = [];

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.mapService.getMarkers()
      .subscribe(item => {
        console.log(item);
        this.markersList.push(item);
    });
  }
}
