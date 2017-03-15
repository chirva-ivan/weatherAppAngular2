import { CityItem } from './city-item';

export class WeatherItem {
  public city: CityItem;
  public description: string;
  public temp: number;

  constructor({city, description, temp}: {city: CityItem; description: string, temp: number}) {
    this.city = city;
    this.description = description;
    this.temp = temp;
  }
}
