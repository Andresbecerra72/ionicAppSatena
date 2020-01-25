import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'first',
        loadChildren: () => import('../tabs/tabs.module').then( m => m.TabsPageModule)
      },
      {
        path: 'second',
        loadChildren: () => import('../servicios/servicios.module').then( m => m.ServiciosPageModule)
      },
      {
        path: 'third',
        loadChildren: () => import('../suscripcion/suscripcion.module').then( m => m.SuscripcionPageModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
