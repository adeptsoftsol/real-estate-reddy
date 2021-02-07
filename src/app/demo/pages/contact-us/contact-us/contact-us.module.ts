import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'})
  ],
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }
