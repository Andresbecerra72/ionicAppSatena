import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';





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
 


  constructor(private http: HttpClient) { 

  

  //codigo para consultar listado de aeropuertos
   this.airportsList = [
     this.http.get<any[]>('http://apps.satena.com.co/ControlPlaneacion/suscripcion/airports.php').subscribe(result => { this.airportsList = result; })
    ]

    

   }

  ngOnInit() {}
  

 

  getAirtports(){
  return this.http.get('http://apps.satena.com.co/ControlPlaneacion/suscripcion/airports.php').subscribe( data => {this.resultadoPeticion = data;});
 
  }


  get(){
    this.http.get('http://apps.satena.com.co/ControlPlaneacion/suscripcion/read.php').subscribe( data => {this.resultadoPeticion = data;});
  
  }


  post(){

    
    this.http.post('http://apps.satena.com.co/ControlPlaneacion/suscripcion/add.php',
    {
      name : this.name,
      lastname : this.lastname,
      correo : this.email,
      airport : this.airportCodeValue
      
    }    
    ).subscribe( data => {this.resultadoPeticion = data;});


  }

  

  

  

}
