import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { InfrastructureComponent } from './infrastructure.component';
import { InfrastructureRoutingModule } from './infrastructure-routing.module';



@NgModule({
  imports: [
    CommonModule,
    InfrastructureRoutingModule,
    SharedModule,
    NgbTabsetModule
  ],
  declarations: [InfrastructureComponent]
})
export class InfrastructureModule { }
