import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { CityItem } from '../../classes/city-item';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {

  @Input() results: Observable<any>;
  @Input() selected: any;
  @Output() searchEvent = new EventEmitter();
  @Output() selectEvent = new EventEmitter();

  searchBox: FormControl = new FormControl();

  constructor() {
    this.searchBox
      .valueChanges
      .subscribe((event: string) => this.searchEvent.emit(event));
  }

  ngOnInit() {
  }

}
