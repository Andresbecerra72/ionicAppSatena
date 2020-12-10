import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Covid } from '../../models/covid.model';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  // variables



  // --------------------constructor-------------------------------------  
  constructor(private http: HttpClient) { }

  // --------------Metodos----------------------------------------

  registroCovid( covid: Covid ){    

    
    const url = 'https://www.satena.com/action/apiMovil.php';
 
    return this.http.post(url, covid).pipe(
                            map( (resp: any) => {
        
                             console.log(resp);         
                              return true;
                            })
                            ); 
 
 
 }



} // END class
