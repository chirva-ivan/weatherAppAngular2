import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherInputComponent } from './components/weather-input/weather-input.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInputComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
