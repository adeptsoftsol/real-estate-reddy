import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { CommercialComponent } from './commercial.component';
import { CommercialRoutingModule } from './commercial-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CommercialRoutingModule,
    SharedModule,
    NgbTabsetModule
  ],
  declarations: [CommercialComponent]
})
export class CommercialModule { }
