import { CityItem } from './city-item';

export class WeatherItem {
  public city: CityItem;
  public description: string;
  public temp: number;
  public isOpen: boolean;

  constructor({
    city,
    description,
    temp,
    isOpen = false
  }: {
    city: CityItem;
    description: string,
    temp: number,
    isOpen?: boolean
  }) {
    this.city = city;
    this.description = description;
    this.temp = temp;
    this.isOpen = isOpen;
  }

  get tempString() {
    return `${this.temp} \xB0C`;
  }
}
