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
import { OutsideClickDirective } from './directives/outside-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    CityDropdownComponent,
    CityItemComponent,
    WeatherListComponent,
    OutsideClickDirective
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
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
