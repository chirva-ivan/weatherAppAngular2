import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDropdownComponent } from './weather-dropdown.component';

describe('WeatherDropdownComponent', () => {
  let component: WeatherDropdownComponent;
  let fixture: ComponentFixture<WeatherDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
