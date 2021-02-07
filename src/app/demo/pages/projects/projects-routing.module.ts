import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'residencial',
        loadChildren: () => import('./residential/residential.module').then(module => module.ResidentialModule)
      },
      {
        path: 'commercial',
        loadChildren: () => import('./commercial/commercial.module').then(module => module.CommercialModule)
      },
      {
        path: 'infrastructure',
        loadChildren: () => import('./infrastructure/infrastructure.module').then(module => module.InfrastructureModule)
      },
      {
        path: 'signin',
        loadChildren: () => import('./auth-signin/auth-signin.module').then(module => module.AuthSigninModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
