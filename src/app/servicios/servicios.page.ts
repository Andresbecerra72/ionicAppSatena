import { Component} from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage {
  item00: any = [];  //recomendados
  item0: any = [];   //viajeros con armas
  item1: any = [];   //correo y carga
  item2: any = [];   //transporte de carga
  subitems: any =[]; //subitems carga 
//itemExpanded: boolean = false;
itemExpandedHeight: number = 200;



upClass:string = 'toggle-up';
downClass:string = 'toggle-down';


  constructor() {

    //personas recomendadas
    this.item00 = [
      {
        name:'Personas Recomendadas',
        info:'Los pasajeros con alguna discapacidad y los adultos mayores, que requieran asistencia especial, así como los niños menores de cinco (5) años y las mujeres embarazadas, junto con sus acompañantes (en caso de ser necesario), tendrán prelación para el embarque. ',
        direccion: 'Terminal Puente Aéreo: Av. Calle 26 #103-08 Entrada Principal, Puerta 3',
        cell: '(571) 423 85 30 Ext. 2294 - 2049 - 2048',
        email: 'info@satena.com. ',
        refmail: 'mailto:info@satena.com. ',
      }

    ];
    //viajeros con armas
    this.item0 = [
      {
        name:'Viajeros con Armas',
        info:'Para mayor informacion del procedimiento comunicarse con los numeros de contacto o presentarse 3 horas antes en los modulos.',
        direccion: 'Terminal Puente Aéreo: Av. Calle 26 #103-08 Entrada Principal, Puerta 3',
        cell: '(571) 423 85 30 Ext. 2294 - 2049 - 2048',
        email: 'info@satena.com. ',
        refmail: 'mailto:info@satena.com. ',
      }

    ];

    //transporte correo y carga
    this.item1 = [
      {
        name:'Correo y Carga',
        info: 'ofrece el servicio de transporte de carga y correo en su modalidad Aeropuerto–Aeropuerto.',
        paragraph1:'Transporte de correo aeropuerto – aeropuerto: Se considera todo paquete cuyo peso sea inferior a 2 kilos; tiene tiempos de entrega entre 24 y 48 horas. Si es un destino el cual no tiene frecuencia diaria, se le debe informar un tiempo aproximado de entrega al cliente.',
        paragraph2: 'Transporte de carga aeropuerto – aeropuerto: Se considera carga todo paquete cuyo peso sea superior a 2 kilos. Este servicio está sujeto a disponibilidad de cupo en la aeronave. Se considera carga común todas aquellas que no requieren un tratamiento o cuidado especial.',
        paragraph3: 'Transportes especiales aeropuerto – aeropuerto: Se considera transporte especial, todos aquellos envíos que requieren un tratamiento diferente ya sea por su naturaleza o por el manejo de los mismos. Dentro de este tipo de envíos se consideran: mascotas, muestras médicas no contagiosas, animales de cría, transporte de plantas y objetos delicados.',
        details: 'Para mayor información puedes comunicarte con nuestra bodega de carga.',
        direccion: 'Calle 25 D Bis carrera 102 A Bodega 1',
        cell: '311 236 29 69',
        email: 'carga@satena.com',
        refmail: 'mailto:carga@satena.com',
        expanded: false
     },

    ];

    //transporte de carga
    this.item2 = [
      {
        name:'Transporte de carga',
        info: 'ofrece a la comunidad interesada en transporte de carga, los servicios de transporte aeropuerto - aeropuerto en sus rutas de operación de manera responsable y segura. Y con el fin de prestarles un buen servicio recomendamos a nuestros estimados clientes tener en cuenta lo siguiente:',
  
        expanded: false
      },

    ];

    //subitems del transporte de carga
   this.subitems = [
  
    {
      name:'Trans. de componentes sanguineos',
      paragraph1: 'facilita el transporte de componentes sanguíneos, teniendo en cuenta que cumplan la instrucción de embalaje 650 que se aplica al número ONU 3373 (Sustancias biológicas de Categoría B)',
      paragraph2:'Las muestras deberán empacarse en embalajes de buena calidad, lo suficientemente fuertes para soportar los choques y cargas que se encuentran normalmente durante el transporte.',
      paragraph3:'Los embalajes deben ser construidos y cerrados de una forma tal que se prevenga cualquier pérdida del contenido que pudiera ocasionarse bajo condiciones normales del transporte, por las vibraciones, cambios de temperatura, humedad o presión.',
      paragraph4:'Se debe adjuntar el certificado del laboratorio remitente, donde se indique que la manipulación de estos elementos no representa riesgos para el ser humano.',
      paragraph5: 'Para mayor información puedes comunicarte con nuestra bodega de carga.',

      expanded: false
    },
    {
      name:'Transporte de perros y gatos',
   
      paragraph1:'Se deben transportar en guacales en fibra de vidrio, con su adecuada ventilación, cierre seguro y en óptimas condiciones, en donde la mascota pueda viajar sin que su estado tanto físico como emocional se vean afectados',
      paragraph2:'La mascota no debe llevar collares, lazos o cualquier otro elemento que pueda afectar su integridad física',
      paragraph3:'Los perros que se encuentran clasificados dentro de las llamadas "Razas Peligrosas" deben llevar siempre bozal y se debe conservar un espacio de 10 cm entre las paredes del guacal y el animal',
      paragraph4:'Debes enviar solo una mascota por guacal. Se harán excepciones cuando se trate de mascotas recién nacidas, caso en el que se pueden manejar dos ejemplares por guacal.',
      paragraph5:'Se debe anexar el carné de vacunas, el cual se entregará al destinatario. En su defecto cuando la mascota no cumpla con la edad requerida para ser vacunada, se debe exigir un certificado expedido por un veterinario calificado.',
      paragraph6:'La mascota debe ser recogida en el destino antes de las 18:00 horas del mismo día, ya que las mascotas no pueden pasar la noche en las bodegas de carga',
    

      expanded: false
    },
    {
      name:'Transporte de piezas fragiles',
      paragraph1:'Para el transporte de toda pieza considerada frágil como cuadros, elementos de vidrio, porcelanas, objetos de mármol, entre otros, se debe exigir un embalaje que lo proteja de golpes y demás riesgos propios del transporte de carga, como envoltura en madera y/o icopor entre otros que lo protejan.',
      paragraph2:'Exija la etiqueta que lo identifique como pieza Frágil y/o la etiqueta de orientación del bulto.',
      paragraph3:'Direccion: Calle 25 D Bis carrera 102 A Bodega 1',
      paragraph4:'Celular: 311 236 29 69 Email: carga@satena.com',
    
  

      expanded: false
    },
    {
      name:'Mercancias extranjeras',
      paragraph1:'Para el envío de mercancías como calzado, vestuario, tecnología de comunicaciones (celulares-computadores) y/o licores en unidades comerciales, se debe presentar la Factura de Compra y/o copia de la Declaración de Importación donde tenga la descripción de la mercancía a transportar con el fin de evitar el decomiso, aprehensión o inmovilización de las mismas por parte de las autoridades',
      paragraph2:'Direccion: Calle 25 D Bis carrera 102 A Bodega 1',
      paragraph3:'Celular: 311 236 29 69 Email: carga@satena.com',

      expanded: false
    },
    {
      name:'Contrato de carga',
      paragraph1:'El presente documento contiene las condiciones contractuales que condicionan la prestación del servicio para el transporte de Carga.',
      paragraph2:'Direccion: Calle 25 D Bis carrera 102 A Bodega 1',
      paragraph3:'Celular: 311 236 29 69 Email: carga@satena.com',
      info:'Ver Contrato',
      link:'https://www.satena.com/viewer.php?id=383&&rlsk=%27YUhSMGNITTZMeTkzZDNjdWMyRjBaVzVoTG1OdmJTOWtiMk4xYldWdWRHOXpMMlpwYkdWekwyTnZiblJ5WVhSdlgyUmxYMk5oY21kaExuQmtaZz09%27',
      

      expanded: false
    },

   ];
    
   
  }

  //personas recomendadas
  //codigo para expandir el elemento cuando se hace click 
expandedItem00(item): void {


  if (item.expanded) {
    item.expanded = false;
   
  } else {
    this.item00.map(listItem => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }

}
//viajeros con armas
//codigo para expandir el elemento cuando se hace click 
expandedItem0(item): void {


  if (item.expanded) {
    item.expanded = false;
   
  } else {
    this.item0.map(listItem => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }

}

//transporte de correo y cargas
//codigo para expandir el elemento cuando se hace click 
expandedItem1(item): void {


  if (item.expanded) {
    item.expanded = false;
   
  } else {
    this.item1.map(listItem => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }

}

//transporte de carga
//codigo para expandir el elemento cuando se hace click 
expandedItem2(item): void {


  if (item.expanded) {
    item.expanded = true;
   
  }else {
    this.item2.map(listItem => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }

}

//subitems de Carga
//codigo para expandir el elemento cuando se hace click 
expandedSubItems(item): void {


  if (item.expanded) {
    item.expanded = false;
   
  } else {
    this.subitems.map(listItem => {
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
