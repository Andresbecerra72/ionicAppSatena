import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu/first', pathMatch: 'full' },
  {
     path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
  {
    path: 'menu', loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  { path: 'covidmodal', loadChildren: './covidmodal/covidmodal.module#CovidmodalPageModule' },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
