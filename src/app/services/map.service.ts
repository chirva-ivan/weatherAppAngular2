import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MapService {

  public markers: EventEmitter<any> = new EventEmitter();

  constructor() { }

  addMarker(lat, lng) {
    this.markers.emit({
      lat: lat,
      lng: lng
    });
  }

  getMarkers() {
    return this.markers;
  }

}
