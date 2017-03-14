export class CityItem {
  public name: string;
  public lat: number;
  public lng: number;

  constructor({name = '', lat, lng}: {name?: string; lat?: number, lng?: number}) {
    this.name = name;
    this.lat = lat;
    this.lng = lng;
  }
}
