import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tiquetes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tiquetes/tiquetes.module').then(m => m.TiquetesPageModule)
          }
        ]
      },
      {
        path: 'ofertas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../ofertas/ofertas.module').then(m => m.OfertasPageModule)
          }
        ]
      },
      {
        path: 'checkin',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../checkin/checkin.module').then(m => m.CheckinPageModule)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'oficinas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../oficinas/oficinas.module').then(m => m.OficinasPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
