import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { ResidentialRoutingModule } from './residential-routing.module';
import { ResidentialComponent } from './residential.component';

@NgModule({
  imports: [
    CommonModule,
    ResidentialRoutingModule,
    SharedModule,
    NgbTabsetModule
  ],
  declarations: [ResidentialComponent]
})
export class ResidentialModule { }
