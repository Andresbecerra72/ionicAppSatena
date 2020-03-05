import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';



@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss'],
})

export class HttpClientComponent implements OnInit {

 
  //se declaran las variables 
  name:string;
  lastname:string;
  email:string;
  airportCodeValue: any;
  public airportsList:any[];
  resultadoPeticion: Object;
  isAccepted: boolean;
  isValidFormSubmitted: boolean;
  ipAddress: any;
 
    
  constructor(private http: HttpClient, public networkInterface: NetworkInterface) {   
       
        this.isValidFormSubmitted = false;
        this.isAccepted = true;   

        //codigo para consultar listado de aeropuertos
        this.airportsList = [
          this.http.get<any[]>('https://www.satena.com/include/movil/airports.php').subscribe(result => { this.airportsList = result; })
          ];

        //codigo para capturar la direccion ip
        this.ipAddress = this.networkInterface.getCarrierIPAddress().then(res => {this.ipAddress = res['ip'];});
     }

  ngOnInit() {}

  //codigo para registro del usuario
  post(){ 

          let key = btoa(btoa("movil"));//llave movil

       
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
        this.post(); 
        form.resetForm();
    }
}
  
//************************

}
