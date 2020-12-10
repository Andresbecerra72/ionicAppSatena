import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Suscription } from '../../models/suscription.model';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {

  // variables
  suscription: Suscription;
  

  // --------------------constructor-------------------------------------  
  constructor(private http: HttpClient) { }

  // --------------Metodos----------------------------------------

  registro( suscription: Suscription ){    

    
    const url = 'https://www.satena.com/action/apiMovil.php';
 
    return this.http.post(url, suscription).pipe(
                            map( (resp: any) => {
        
                            // console.log(resp);         
                              return true;
                            })
                            ); 
 
 
 }


 getAirtports() {
  
  const url = 'https://www.satena.com/include/movil/airports.php';

  return this.http.get<any[]>(url);

 }
  

 getIPAddress()  
  {  
    return this.http.get("http://api.ipify.org/?format=json");  
  }  





} // END class