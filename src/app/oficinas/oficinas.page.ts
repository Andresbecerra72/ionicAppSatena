import { Component } from '@angular/core';



@Component({
  selector: 'app-oficinas',
  templateUrl: 'oficinas.page.html',
  styleUrls: ['oficinas.page.scss']
})
export class OficinasPage {

items: any = [];
//itemExpanded: boolean = false;
itemExpandedHeight: number = 170;

upClass:string = 'toggle-up';
downClass:string = 'toggle-down';

  constructor() {

    
    this.items = [
    {
       name:'Apartadó',
       iata: '- APO',
       direccion: 'Carrera 103 No. 99 - 44',
       lugar: 'Edificio Los Almendros, Barrio Ortiz',
       telefono:' (57+4) 8283223 - (57+4) 8282327 - (57+4) 8285011',
       celular: '(311) 254 68 06 - (311) 432 50 45',
       cellAeropuerto: '(311) 2362998',
       email: 'apartado@satena.com',
       refmail: 'mailt:apartado@satena.com',
       info:'',
      expanded: false
    },
    {
      name:'Araracuara',
      iata: '- ACR',
      direccion: 'Vía aeropuerto',
      lugar: '',
      telefono:' ',
      celular: '(310) 219 83 25 - (313) 868 59 83',
      cellAeropuerto: '(310) 219 83 25',
      email: 'araracuara@satena.com',
      refmail: 'mailto:araracuara@satena.com',
      info:'',
     expanded: false
   },
         
   {
    name:'Arauca',
    iata: '- AUC',
    direccion: 'Aeropuerto Santiago Pérez',
    lugar: '',
    telefono:'(7) 8853407 ext 103',
    celular: '(310) 209 73 20, (320) 726 45 05, (310) 778 59 19',
    cellAeropuerto: '(310) 209 72 79',
    email: 'araucacentro@satena.com',
    refmail: 'mailto:araucacentro@satena.com',
    info:'Ventas: Carrera 19 No 22 - 04',
   expanded: false
 },
 {
  name:'Bahía Solano',
  iata: '- BSC',
  direccion: 'Aeropuerto Santiago Pérez',
  lugar: '',
  telefono:'(7) 8853407 ext 103',
  celular: '(310) 209 73 20, (320) 726 45 05, (310) 778 59 19',
  cellAeropuerto: '(310) 209 72 79',
  email: 'araucacentro@satena.com',
  refmail: 'mailto:araucacentro@satena.com',
  info:'Ventas: Carrera 19 No 22 - 04',
 expanded: false
},
{
  name:'Bogotá',
  iata: '- BOG',
  direccion: 'Aeropuerto Santiago Pérez',
  lugar: '',
  telefono:'(7) 8853407 ext 103',
  celular: '(310) 209 73 20, (320) 726 45 05, (310) 778 59 19',
  cellAeropuerto: '(310) 209 72 79',
  email: 'araucacentro@satena.com',
  refmail: 'mailto:araucacentro@satena.com',
  info:'Ventas: Carrera 19 No 22 - 04',
 expanded: false
},
{
  name:'Bucaramanga',
  iata: '- BGA',
  direccion: 'Aeropuerto Santiago Pérez',
  lugar: '',
  telefono:'(7) 8853407 ext 103',
  celular: '(310) 209 73 20, (320) 726 45 05, (310) 778 59 19',
  cellAeropuerto: '(310) 209 72 79',
  email: 'araucacentro@satena.com',
  refmail: 'mailto:araucacentro@satena.com',
  info:'Ventas: Carrera 19 No 22 - 04',
 expanded: false
},
{
  name:'Buenaventura',
  iata: '- BUN',
  direccion: 'Aeropuerto Santiago Pérez',
  lugar: '',
  telefono:'(7) 8853407 ext 103',
  celular: '(310) 209 73 20, (320) 726 45 05, (310) 778 59 19',
  cellAeropuerto: '(310) 209 72 79',
  email: 'araucacentro@satena.com',
  refmail: 'mailto:araucacentro@satena.com',
  info:'Ventas: Carrera 19 No 22 - 04',
 expanded: false
},
{
  name:'Cali',
  iata: '- CLO',
  direccion: 'Aeropuerto Santiago Pérez',
  lugar: '',
  telefono:'(7) 8853407 ext 103',
  celular: '(310) 209 73 20, (320) 726 45 05, (310) 778 59 19',
  cellAeropuerto: '(310) 209 72 79',
  email: 'araucacentro@satena.com',
  refmail: 'mailto:araucacentro@satena.com',
  info:'Ventas: Carrera 19 No 22 - 04',
 expanded: false
},
{
  name:'Corozal',
  iata: '- CZU',
  direccion: 'Aeropuerto Santiago Pérez',
  lugar: '',
  telefono:'(7) 8853407 ext 103',
  celular: '(310) 209 73 20, (320) 726 45 05, (310) 778 59 19',
  cellAeropuerto: '(310) 209 72 79',
  email: 'araucacentro@satena.com',
  refmail: 'mailto:araucacentro@satena.com',
  info:'Ventas: Carrera 19 No 22 - 04',
 expanded: false
},
{
  name:'Florencia',
  iata: '- FLA',
  direccion: 'Aeropuerto Santiago Pérez',
  lugar: '',
  telefono:'(7) 8853407 ext 103',
  celular: '(310) 209 73 20, (320) 726 45 05, (310) 778 59 19',
  cellAeropuerto: '(310) 209 72 79',
  email: 'araucacentro@satena.com',
  refmail: 'mailto:araucacentro@satena.com',
  info:'Ventas: Carrera 19 No 22 - 04',
 expanded: false
},
{
  name:'Guapi',
  iata: '- GPI',
  direccion: 'Aeropuerto Santiago Pérez',
  lugar: '',
  telefono:'(7) 8853407 ext 103',
  celular: '(310) 209 73 20, (320) 726 45 05, (310) 778 59 19',
  cellAeropuerto: '(310) 209 72 79',
  email: 'araucacentro@satena.com',
  refmail: 'mailto:araucacentro@satena.com',
  info:'Ventas: Carrera 19 No 22 - 04',
 expanded: false
},
{
  name:'Inírida',
  iata: '- PDA',
  direccion: 'Aeropuerto Santiago Pérez',
  lugar: '',
  telefono:'(7) 8853407 ext 103',
  celular: '(310) 209 73 20, (320) 726 45 05, (310) 778 59 19',
  cellAeropuerto: '(310) 209 72 79',
  email: 'araucacentro@satena.com',
  refmail: 'mailto:araucacentro@satena.com',
  info:'Ventas: Carrera 19 No 22 - 04',
 expanded: false
},
{
  name:'Ipiales',
  iata: '- IPI',
  direccion: 'Aeropuerto Santiago Pérez',
  lugar: '',
  telefono:'(7) 8853407 ext 103',
  celular: '(310) 209 73 20, (320) 726 45 05, (310) 778 59 19',
  cellAeropuerto: '(310) 209 72 79',
  email: 'araucacentro@satena.com',
  refmail: 'mailto:araucacentro@satena.com',
  info:'Ventas: Carrera 19 No 22 - 04',
 expanded: false
},
{
  name:'La Chorrera',
  iata: '- LCH',
  direccion: 'Aeropuerto Santiago Pérez',
  lugar: '',
  telefono:'(7) 8853407 ext 103',
  celular: '(310) 209 73 20, (320) 726 45 05, (310) 778 59 19',
  cellAeropuerto: '(310) 209 72 79',
  email: 'araucacentro@satena.com',
  refmail: 'mailto:araucacentro@satena.com',
  info:'Ventas: Carrera 19 No 22 - 04',
 expanded: false
},
{
  name:'La Macarena',
  iata: '- LMC',
  direccion: 'Aeropuerto Santiago Pérez',
  lugar: '',
  telefono:'(7) 8853407 ext 103',
  celular: '(310) 209 73 20, (320) 726 45 05, (310) 778 59 19',
  cellAeropuerto: '(310) 209 72 79',
  email: 'araucacentro@satena.com',
  refmail: 'mailto:araucacentro@satena.com',
  info:'Ventas: Carrera 19 No 22 - 04',
 expanded: false
},
{
  name:'La Pedrera',
  iata: '- LPD',
  direccion: 'Aeropuerto Santiago Pérez',
  lugar: '',
  telefono:'(7) 8853407 ext 103',
  celular: '(310) 209 73 20, (320) 726 45 05, (310) 778 59 19',
  cellAeropuerto: '(310) 209 72 79',
  email: 'araucacentro@satena.com',
  refmail: 'mailto:araucacentro@satena.com',
  info:'Ventas: Carrera 19 No 22 - 04',
 expanded: false
},
{
  name:'Leticia',
  iata: '- LET',
  direccion: 'Aeropuerto Santiago Pérez',
  lugar: '',
  telefono:'(7) 8853407 ext 103',
  celular: '(310) 209 73 20, (320) 726 45 05, (310) 778 59 19',
  cellAeropuerto: '(310) 209 72 79',
  email: 'araucacentro@satena.com',
  refmail: 'mailto:araucacentro@satena.com',
  info:'Ventas: Carrera 19 No 22 - 04',
 expanded: false
}
    ];

   
    
   
  }
//codigo para expandir el elemento cuando se hace click 
expandedItem(item): void {


  if (item.expanded) {
    item.expanded = false;
   
  } else {
    this.items.map(listItem => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }

}
 
//***************

//se usa para mover el icono
toggle() {
  var square = document.querySelector('.icono.derecha');

  if (~square.className.indexOf(this.downClass)) {
    square.className = square.className.replace(this.downClass, this.upClass);
  } else {
        square.className = square.className.replace(this.upClass, this.downClass);
  }
}
 



}