import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OficinasPage } from './oficinas.page';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
//se importa el expandable Component
import { ExpandableComponent } from "../components/expandable/expandable.component";
import { fas, faCoffee } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forChild([{ path: '', component: OficinasPage }])
  ],
  declarations: [OficinasPage, ExpandableComponent]
})
export class OficinasPageModule {

  constructor(library: FaIconLibrary) {
   library.addIconPacks(fas);
   library.addIcons(faCoffee);
      }

}