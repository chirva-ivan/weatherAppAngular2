import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { CityItem } from '../../classes/city-item';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {

  @Input() results: Observable<any>;
  @Output() searchEvent = new EventEmitter();
  @Output() selectEvent = new EventEmitter();

  searchBox: FormControl = new FormControl();

  constructor() {
    this.searchBox
      .valueChanges
      .subscribe((event: string) => this.searchEvent.emit(event));
  }

  itemSelect(item) {
    this.selectEvent.emit(item);
    this.searchBox.reset();
  }

  ngOnInit() {
  }

}
