import { ContactUsModule } from "./contact-us/contact-us.module";

describe('CoreMapsModule', () => {
  let coreMapsModule: ContactUsModule;

  beforeEach(() => {
    coreMapsModule = new ContactUsModule();
  });

  it('should create an instance', () => {
    expect(coreMapsModule).toBeTruthy();
  });
});
