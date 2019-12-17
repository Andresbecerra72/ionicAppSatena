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
        name:'Aguachica',
        iata: '- HAY',
        direccion: 'Aeropuerto Hacaritama de Aguachica',
        lugar:'',
        telefono: '313 801 41 27',
        celular: '313 801 41 27',
        cellAeropuerto: '',
        email: 'aguachica@satena.com',
        refmail: 'mailto:aguachica@satena.com',
        info:'',
       expanded: false
     },
    {
       name:'Apartadó',
       iata: '- APO',
       direccion: 'Carrera 103 No. 99 - 44',
       lugar: 'Edificio Los Almendros, Barrio Ortiz',
       telefono:' (57+4) 8283223 - (57+4) 8282327 - (57+4) 8285011',
       celular: '(311) 254 68 06 - (311) 432 50 45',
       cellAeropuerto: '(311) 2362998',
       email: 'apartado@satena.com',
       refmail: 'mailto:apartado@satena.com',
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
  direccion: 'Calle 3 No 1-149',
  lugar: 'Barrio el Carmel',
  celular: '(313) 422 27 94',
  cellAeropuerto: '(311) 876 89 61',
  email: 'bahiasolano@satena.com',
  refmail: 'mailto:bahiasolano@satena.com',
  
 expanded: false
},
{
  name:'Bogotá',
  iata: '- BOG',
  direccion: 'Av El Dorado No 103-08 Entrada 1, Interior 11',
  lugar: 'Dirección Comercial: Carrera 103 N°25D-24, Fontibón',
  telefono:'(57+1) 423 85 30',
  celular: '314 359 73 57',
  cellAeropuerto: 'WhatsApp 313 438 46 22',
  email: 'ventasaeropuerto@satena.com',
  refmail: 'mailto:ventasaeropuerto@satena.com',
  info:'Terminal Puente Aereo Entrada Principal, Puerta 3',
 expanded: false
},
{
  name:'Bucaramanga',
  iata: '- BGA',
  direccion: 'Calle 35 No 16-20 Local 5',
  lugar: 'Pasaje Santander',
  telefono:'(57+7) 6301705 - (57+7) 6707087',
  celular: '(311) 236 29 96',
  cellAeropuerto: '(311) 236 29 97',
  email: 'bucaramanga@satena.com',
  refmail: 'mailto:bucaramanga@satena.com',
  info:'',
 expanded: false
},
{
  name:'Buenaventura',
  iata: '- BUN',
  direccion: 'Calle 1 No. 2A – 39',
  lugar: 'Centro',
  telefono:'(57+2) 2418009 - (57+2) 2423825',
  celular: '(310) 325 87 22',
  cellAeropuerto: '(310) 325 87 22',
  email: 'buenaventura@satena.com',
  refmail: 'mailto:buenaventura@satena.com',
  info:'',
 expanded: false
},
{
  name:'Cali',
  iata: '- CLO',
  direccion: 'Cra 5 No. 8 - 12',
  lugar: '',
  telefono:' (57+2) 8857709',
  celular: ' (311) 254 68 22, Carga:(315) 897 02 39',
  cellAeropuerto: '(57+2) 666 33 70 - (57+2) 666 32 95',
  email: 'cali@satena.com',
  refmail: 'mailto:cali@satena.com',
  info:'Bodega de Carga: Aeropuerto Alfonso Bonilla Aragon, Terminal de carga, bodega No.5 TAESCOL.',
 expanded: false
},
{
  name:'Corozal',
  iata: '- CZU',
  direccion: '',
  lugar: '',
  telefono:'(320) 7899631',
  celular: '(320) 7899631 - (300) 8102153',
  cellAeropuerto: '',
  email: 'corozal@satena.com',
  refmail: 'mailto:corozal@satena.com',
  info:'',
 expanded: false
},
{
  name:'Florencia',
  iata: '- FLA',
  direccion: 'Carrera 13 No 12-57',
  lugar: 'Barrio San Francisco',
  telefono:'(57+8) 438 02 74',
  celular: '(320) 303 77 83 - (318) 493 10 41',
  cellAeropuerto: '(313) 462 83 47',
  email: 'florencia@satena.com',
  refmail: 'mailto:florencia@satena.com',
  info:'',
 expanded: false
},
{
  name:'Guapi',
  iata: '- GPI',
  direccion: 'Avenida Aeropuerto Juan Casiano',
  lugar: 'Aeropuerto',
  telefono:'(57+2) 840 11 66',
  celular: '(311) 876 89 58 - (310) 322 74 46',
  cellAeropuerto: '(311) 254 68 09',
  email: 'guapi@satena.com',
  refmail: 'mailto:guapi@satena.com',
  info:'',
 expanded: false
},
{
  name:'Inírida',
  iata: '- PDA',
  direccion: 'Carrera 3A No.15-05 Locales 7 y 8',
  lugar: 'El Puerto',
  telefono:'(313) 422 27 41',
  celular: '(311) 229 77 28',
  cellAeropuerto: '(311) 229 77 28',
  email: 'inirida@satena.com',
  refmail: 'mailto:inirida@satena.com',
  info:'',
 expanded: false
},
{
  name:'Ipiales',
  iata: '- IPI',
  direccion: 'Carrera 7 No. 16-49',
  lugar: '',
  telefono:'(57+2) 7256085 – (57+2) 7256086',
  celular: '(321) 232 49 29',
  cellAeropuerto: '(311) 254 68 18',
  email: 'ipiales@satena.com',
  refmail: 'mailto:ipiales@satena.com',
  info:'',
 expanded: false
},
{
  name:'La Chorrera',
  iata: '- LCH',
  direccion: 'Aeropuerto La Chorrera',
  lugar: '',
  telefono:'(320) 850 94 51',
  celular: '(320) 850 9451 – (320) 850 8034',
  cellAeropuerto: '',
  email: 'chorrera@satena.com',
  refmail: 'mailto:chorrera@satena.com',
  info:'',
 expanded: false
},
{
  name:'La Macarena',
  iata: '- LMC',
  direccion: 'Aeropuerto La Macarena',
  lugar: '',
  telefono:'(311) 532 01 90',
  celular: '(321) 395 29 25',
  cellAeropuerto: '',
  email: 'macarena@satena.com',
  refmail: 'mailto:macarena@satena.com',
  info:'',
 expanded: false
},
{
  name:'La Pedrera',
  iata: '- LPD',
  direccion: 'Aeropuerto La Pedrera',
  lugar: '',
  telefono:'(320) 488 19 46',
  celular: '(320) 488 19 46',
  cellAeropuerto: '',
  email: 'leticia@satena.com',
  refmail: 'mailto:leticia@satena.com',
  info:'',
 expanded: false
},
{
  name:'Leticia',
  iata: '- LET',
  direccion: 'Aeropuerto Alfredo Vasquez Cobo',
  lugar: '',
  telefono:'(57+8) 5924845',
  celular: '(312) 457 62 91 – (310) 329 05 07',
  cellAeropuerto: '(310) 329 05 07',
  email: 'leticia@satena.com',
  refmail: 'mailto:leticia@satena.com',
  info:'',
 expanded: false
},
{
  name:'Medellin',
  iata: '- EOH',
  direccion: 'Calle 7 Sur No 42-70, Oficina 1111',
  lugar: 'Edificio Forum',
  telefono:'(57+4) 444 77 00',
  celular: '(312) 457 64 32',
  cellAeropuerto: '(310) 359 20 16',
  email: 'medellin@satena.com',
  refmail: 'mailto:medellin@satena.com',
  info:'Aeropuerto Olaya Herrera: Carrera 65A No 13-157',
 expanded: false
},
{
  name:'Mitú',
  iata: '- MVP',
  direccion: 'Aeropuerto Fabio A. León Bentley',
  lugar: '',
  telefono:'(310) 803 73 98',
  celular: '(321) 205 52 53',
  cellAeropuerto: '',
  email: 'mitu@satena.com',
  refmail: 'mailto:mitu@satena.com',
  info:'',
 expanded: false
},

{
  name:'Mocoa',
  iata: '',
  direccion: 'Carrera 9ª No. 17 - 42',
  lugar: 'Edificio Julio Muriel – Local 101',
  telefono:'(57+8) 429 51 06',
  celular: '(310) 560 86 03',
  cellAeropuerto: '(311) 254 68 98',
  email: 'mocoa@satena.com',
  refmail: 'mailto:mocoa@satena.com',
  info:'',
 expanded: false
},
{
  name:'Neiva',
  iata: '- NVA',
  direccion: 'Carrera 8 No 20-06',
  lugar: 'Punto de Venta',
  telefono:'(57+8) 857 67 76',
  celular: '(301) 445 77 14 - (321) 371 57 76',
  cellAeropuerto: '',
  email: 'neiva@satena.com',
  refmail: 'mailto:neiva@satena.com',
  info:'',
 expanded: false
},

{
  name:'Nuquí',
  iata: '- NQU',
  direccion: 'Barrio la Union',
  lugar: '',
  telefono:'(313) 846 67 51 - (315) 735 37 49',
  celular: '(315) 735 37 49',
  cellAeropuerto: '',
  email: 'nuqui@satena.com',
  refmail: 'mailto:nuqui@satena.com',
  info:'',
 expanded: false
},

{
  name:'Orito',
  iata: '',
  direccion: 'Calle 8 Nº 11-49',
  lugar: 'Marco Fidel Suarez',
  telefono:'(57+8) 429 01 47',
  celular: '(321) 205 52 78',
  cellAeropuerto: '',
  email: 'orito@satena.com',
  refmail: 'mailto:orito@satena.com',
  info:'',
 expanded: false
},

{
  name:'Pitalito',
  iata: '- PTX',
  direccion: 'Calle 17 No 2-59',
  lugar: 'Frente al Metro',
  telefono:'(312) 528 13 16 - (313) 499 26 02',
  celular: '(314) 421 60 82',
  cellAeropuerto: '',
  email: 'pitalito@satena.com',
  refmail: 'mailto:pitalito@satena.com',
  info:'',
 expanded: false
},

{
  name:'Providencia',
  iata: '- PVA',
  direccion: 'Aeropuerto El Embrujo',
  lugar: '',
  telefono:'',
  celular: '(313) 789 83 61',
  cellAeropuerto: '',
  email: 'sanandres@satena.com',
  refmail: 'mailto:sanandres@satena.com',
  info:'',
 expanded: false
},

{
  name:'Puerto Asís',
  iata: '- PUU',
  direccion: 'Carrera 20 No 9-92',
  lugar: 'Centro',
  telefono:'(57+8) 422 78 00',
  celular: '(311) 236 2974 – (311) 236 29 75 - (320) 271 38 22',
  cellAeropuerto: '(57+8) 422 79 53',
  email: 'puertoasis@satena.com',
  refmail: 'mailto:puertoasis@satena.com',
  info:'',
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