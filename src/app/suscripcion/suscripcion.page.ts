import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SuscripcionService } from '../services/suscripcion/suscripcion.service';

import { Suscription } from '../models/suscription.model';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.page.html',
  styleUrls: ['./suscripcion.page.scss'],
})
export class SuscripcionPage implements OnInit {
 

  //se declaran las variables 
  suscription: Suscription;
  name:string;
  lastname:string;
  email:string;
  airportCodeValue: any;
  public airportsList:any[] =  [];
  // resultadoPeticion: Object;
  isAccepted: boolean;
  isValidFormSubmitted: boolean;
  ipAddress: any;
 
    // -----------constructor---------------------------
  constructor(private suscripcionService: SuscripcionService ) {   // public networkInterface: NetworkInterface 
       
        this.isValidFormSubmitted = false;
        this.isAccepted = true;   
        
        this.getAirports();  //codigo para consultar listado de aeropuertos 
        this.getIP();          

        
     }

  ngOnInit() {}


  // ---------metodos---------------------------------

  // metodo para Obtener la lista de Aeropuertos
getAirports(){

  this.suscripcionService.getAirtports()
                        .subscribe(resp => { 
                          this.airportsList = resp;
                         });

}

 // Metodo para capturar la IP
getIP()  
{  

  // this.ipAddress = this.networkInterface.getCarrierIPAddress()
  //                                       .then(res => {
  //                                         this.ipAddress = res['ip'];
  //                                         // console.log(this.ipAddress);
  //                                       }) 
  //                                       .catch(error => console.error(`Unable to get IP: ${error}`));

  this.suscripcionService.getIPAddress()
                        .subscribe((resp:any)=>{  
                          this.ipAddress = resp.ip; 
                          console.log(this.ipAddress);
                           
                        });  
}  


  //codigo para registro del usuario
  regitrarSuscripcion(){ 

          let key = btoa(btoa("suscripcion"));//llave movil

          this.suscription = new Suscription(

            key,
            this.name,
            this.lastname,
            this.email,
            'Usuario Android',
            this.airportCodeValue,
            this.ipAddress // no funciona en pruebas **SOLO ANDROID
            
          );

          this.suscripcionService.registro(this.suscription)
                                 .subscribe( (resp: any) => {

                                    // console.log(resp);                                    

                                 },
                                 err => {
                                   console.log('HTTP Error', err.error);
       
                                    },
                                () => console.log('HTTP request completed.')
                              );


      
  }

  
//***Resetea el formulario y llama el metodo POST ****************
onFormSubmit(form: NgForm) {

  this.isValidFormSubmitted = false;
  if (form.invalid)
   {
     return;
  }
    else if (this.isAccepted == true)
    {
        this.isValidFormSubmitted = true;
        this.regitrarSuscripcion(); 
        form.resetForm();
    }
}
  
//************************

} // END class

/* CODIGO NO USADO */
 /*
         this.http.post('https://www.satena.com/action/suscribirseSatenaAction.php',      
          {
            key : key,
            name : this.name,
            lastname : this.lastname,
            correo : this.email,
            creadoPor: 'Usuario Android',
            airport : this.airportCodeValue,
            ip: this.ipAddress //para iOS esta pendiente la captura de la IP
          }
          ).subscribe( data => {this.resultadoPeticion = data;});
*/


 // this.http.get<any[]>('https://www.satena.com/include/movil/airports.php').subscribe(result => { this.airportsList = result; })
