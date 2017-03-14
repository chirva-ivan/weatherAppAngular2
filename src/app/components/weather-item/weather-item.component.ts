import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {

  @Input() results: Observable<any>;
  @Output() searchEvent = new EventEmitter();

  searchBox: FormControl = new FormControl();

  constructor() {
    this.searchBox
      .valueChanges
      .subscribe((event) => this.searchEvent.emit(event));
  }

  ngOnInit() {
  }

}
