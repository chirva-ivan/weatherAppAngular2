import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CityDropdownComponent } from './components/city-dropdown/city-dropdown.component';
import { CityItemComponent } from './components/city-item/city-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CityDropdownComponent,
    CityItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
