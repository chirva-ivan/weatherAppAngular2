import { WeatherAppAngularPage } from './app.po';

describe('weather-app-angular App', () => {
  let page: WeatherAppAngularPage;

  beforeEach(() => {
    page = new WeatherAppAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
