import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//se improta el modulo http
import {HttpClientModule} from '@angular/common/http';

//se improta el modulo networkinterface para capturar la IP
import { NetworkInterface } from '@ionic-native/network-interface/ngx';

//se importa el modulo Forms
import {FormsModule} from '@angular/forms';

//se importa el modulo para el carrusel
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//se importa el paquete font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
//se importan librerias de los icono font awesome
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab)



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, FormsModule, IonicModule.forRoot(), AppRoutingModule,FontAwesomeModule],
  providers: [
    StatusBar,
    NetworkInterface,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
