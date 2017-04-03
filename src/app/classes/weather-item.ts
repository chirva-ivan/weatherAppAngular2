import { CityItem } from './city-item';

export class WeatherItem {
  public city: CityItem;
  public description: string;
  public icon: string;
  public temp: number;
  public isOpen: boolean;

  constructor({
    city,
    description,
    icon,
    temp,
    isOpen = false
  }: {
    city: CityItem;
    description: string,
    icon: string,
    temp: number,
    isOpen?: boolean
  }) {
    this.city = city;
    this.description = description;
    this.icon = icon;
    this.temp = temp;
    this.isOpen = isOpen;
  }

  get tempString() {
    return `${this.temp} \xB0C`;
  }

  get iconUrl() {
    return `http://openweathermap.org/img/w/${this.icon}.png`;
  }

  get name() {
    return this.city.name;
  }
}
