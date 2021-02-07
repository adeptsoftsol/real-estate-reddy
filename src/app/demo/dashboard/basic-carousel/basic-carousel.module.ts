import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicCarouselRoutingModule } from './basic-carousel-routing.module';
import { BasicCarouselComponent } from './basic-carousel.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BasicCarouselRoutingModule,
    SharedModule,
    NgbCarouselModule
  ],
  declarations: [BasicCarouselComponent]
})
export class BasicCarouselModule { }
