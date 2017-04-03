import { WeatherItem } from './weather-item';

export class WeatherList<WeatherItem> extends Array<WeatherItem> {

  public reverce: Boolean = true;
  private prevKey = '';

  sortBy(key) {
    this.reverce = this.prevKey === key ? !this.reverce : false;
    this.prevKey = key;

    return this.sort(
      (first, second) => {
        if (first[key] < second[key]) {
          return this.reverce ? -1 : 1;
        };

        if (first[key] > second[key]) {
          return this.reverce ? 1 : -1;
        };

        return 0;
      }
    );
  }

  delete(item) {
    return this.splice(this.indexOf(item), 1);
  }
}
