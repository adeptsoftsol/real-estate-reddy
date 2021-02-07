import { AboutUsModule } from './about-us.module';

describe('AboutUsModule', () => {
  let googleMapsModule: AboutUsModule;

  beforeEach(() => {
    googleMapsModule = new AboutUsModule();
  });

  it('should create an instance', () => {
    expect(googleMapsModule).toBeTruthy();
  });
});
