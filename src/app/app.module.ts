import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { CityDropdownComponent } from './components/city-dropdown/city-dropdown.component';
import { CityItemComponent } from './components/city-item/city-item.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherService } from './services/weather.service';
import { MapService } from './services/map.service';

@NgModule({
  declarations: [
    AppComponent,
    CityDropdownComponent,
    CityItemComponent,
    WeatherListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBKoDrMWtVgwWoV5uoPEwPuHHyi0qcFPoA'
    })
  ],
  providers: [WeatherService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
