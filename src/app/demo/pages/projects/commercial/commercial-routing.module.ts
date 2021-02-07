import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommercialComponent } from './commercial.component';

const routes: Routes = [
  {
    path: '',
    component: CommercialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule { }
