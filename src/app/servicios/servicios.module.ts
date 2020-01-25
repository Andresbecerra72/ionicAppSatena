import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServiciosPage } from './servicios.page';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
//se importa el expandable Component
import { ExpandComponent } from "../components/expand/expand.component";
import { fas, faCoffee } from '@fortawesome/free-solid-svg-icons';

const routes: Routes = [
  {
    path: '',
    component: ServiciosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServiciosPage, ExpandComponent]
})
export class ServiciosPageModule {

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faCoffee);
       }

}
