import { AboutUsModule } from "./About-us/About-us.module";

describe('CoreMapsModule', () => {
  let coreMapsModule: AboutUsModule;

  beforeEach(() => {
    coreMapsModule = new AboutUsModule();
  });

  it('should create an instance', () => {
    expect(coreMapsModule).toBeTruthy();
  });
});
