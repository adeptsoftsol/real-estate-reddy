import { ContactUsModule } from './contact-us.module';

describe('ContactUsModule', () => {
  let googleMapsModule: ContactUsModule;

  beforeEach(() => {
    googleMapsModule = new ContactUsModule();
  });

  it('should create an instance', () => {
    expect(googleMapsModule).toBeTruthy();
  });
});
