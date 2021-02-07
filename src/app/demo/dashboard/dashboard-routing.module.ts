import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'analytics',
        loadChildren: () => import('./dash-analytics/dash-analytics.module').then(module => module.DashAnalyticsModule)
      },
      {
        path: 'carousel',
        loadChildren: () => import('./basic-carousel/basic-carousel.module').then(module => module.BasicCarouselModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
