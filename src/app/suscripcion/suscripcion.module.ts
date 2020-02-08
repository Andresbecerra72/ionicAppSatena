import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuscripcionPage } from './suscripcion.page';

//se importa el Component
import { HttpClientComponent } from "../components/http-client/http-client.component";

const routes: Routes = [
  {
    path: '',
    component: SuscripcionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuscripcionPage, HttpClientComponent]
})
export class SuscripcionPageModule {}
