import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CovidmodalPage } from '../covidmodal/covidmodal.page';

import { CovidService } from '../services/covid/covid.service';

import { Covid } from '../models/covid.model';


@Component({
  selector: 'app-checkin',
  templateUrl: 'checkin.page.html',
  styleUrls: ['checkin.page.scss']
})
export class CheckinPage {

  // variables
  covid: Covid = new Covid(); // Modelo
  dataReturned: any;
  counter: number = 0; // cuenta las veces que responden "NO"
  ishidden: boolean = true; // esconde el embeded del checkin    
  ishiddenForm: boolean = false;
  ishiddenForm1: boolean = true;
  isAccepted: boolean;

  name:string = '';
  dni:string;
  nationality:string;
  flight: number;




  // -----------CONSTRUCTOR--------------
  constructor(public covidService: CovidService,
              public modalController: ModalController,
              public toastController: ToastController) {

      // this.openModal(); // abre el primer modal (modal 4)    

  }



  //------------------------------------------------------
  //            METODOS DEL MODAL
  //------------------------------------------------------
// ******Funciones modal 0*** ULTIMA PREGUNTA
async openModal() {
  const modal = await this.modalController.create({
    component: CovidmodalPage,
    componentProps: {
      paramTitle: 'Estimado Usuario:',
      paramID: 'Si su respuesta a la anterior pregunta fue afirmativa, por favor responda la siguiente pregunta:',
      param1: '',
      param2: '5. ¿Usted ya cumplio con el protocolo de cuarentena y se le realizaron las 2 pruebas de coronavirus (COVID-19) dando como resultados ambas negativas?',
      hiddenQ: false,
      hiddenQNA: false,
      hiddenMenu: true
    }
  });

  this.openModal0();

  // pasa el dato del radio Buton al cerrar el modal
  modal.onDidDismiss().then((dataReturned) => {    
    if (dataReturned !== null) {     
      this.dataReturned = dataReturned.data;
      this.counter = this.counter + parseInt(this.dataReturned, 10);
      this.covid.answer_5 = this.dataReturned == '1' ? 0 : 1 ;
      // console.log('Dato llegado:' + this.counter); 

    
        // Codigo para Esconder los formularios
        this.ishiddenForm = true; // Esconde el Formulario
        this.ishiddenForm1 = false; // Esconde el Formulario 1
       
    }
    
  });

  

  return await modal.present();
}

async openModal0() {
  const modal = await this.modalController.create({
    component: CovidmodalPage,
    componentProps: {
      paramTitle: 'Estimado Usuario:',
      paramID: '4. ¿Ha sido usted diagnosticado en algún momento durante la actual contingencia de salud con COVID-19?',
      hiddenQ: false,
      hiddenQNA: true,
      hiddenMenu: true
    }
  });

  this.openModal1();

  // pasa el dato del radio Buton al cerrar el modal
  modal.onDidDismiss().then((dataReturned) => {    
    if (dataReturned !== null) {     
      this.dataReturned = dataReturned.data;
      this.counter = this.counter + parseInt(this.dataReturned, 10);
      this.covid.answer_4 = this.dataReturned == '1' ? 0 : 1 ;
      //console.log('Dato llegado:' + this.counter);        
       
    }
    
  });

  

  return await modal.present();
}

// ******Funciones modal 1***
async openModal1() {
  const modal = await this.modalController.create({
    component: CovidmodalPage,
    componentProps: {
      paramTitle: 'Estimado Usuario:',
      paramID: '3. ¿Ha presentado alguno o varios de los siguientes síntomas durante los últimos 5 días?',
      param1: ' - Secreción y goteos nasales',
      param2: ' - Dolor de garganta y cabeza',
      param3: ' - Tos seca',
      param4: ' - Fiebre superior a 37,5 C durante 3 o más días',
      param5: ' - Dificultad para respirar',
      param6: ' - Fatiga',
      hiddenQ: false,
      hiddenQNA: true,
      hiddenMenu: true
      
    }
  });

  

  this.openModal2();

  // pasa el dato del radio Buton al cerrar el modal
  modal.onDidDismiss().then((dataReturned) => {
    if (dataReturned !== null) {     
      this.dataReturned = dataReturned.data;
      this.counter = this.counter + parseInt(this.dataReturned, 10);
      this.covid.answer_3 = this.dataReturned == '1' ? 0 : 1 ;
      // console.log("Dato llegado:" + this.counter);
     
    }
  });

  return await modal.present();
}


// ******Funciones modal 2***
async openModal2() {
  const modal = await this.modalController.create({
    component: CovidmodalPage,
    componentProps: {
      paramTitle: 'Estimado Usuario:',
      // tslint:disable-next-line: max-line-length
      paramID: '2. ¿Ha estado usted en contacto directo en los últimos 14 días con personas que hayan sido diagnosticados con el nuevo coronavirus COVID-19?',
      hiddenQ: false,
      hiddenQNA: true,
      hiddenMenu: true
    }
  });

  

  this.openModal3();

 // pasa el dato del radio Buton al cerrar el modal
  modal.onDidDismiss().then((dataReturned) => {
  if (dataReturned !== null) {     
    this.dataReturned = dataReturned.data;
    this.counter = this.counter + parseInt(this.dataReturned, 10);
    this.covid.answer_2 = this.dataReturned == '1' ? 0 : 1 ;
    // console.log("Dato llegado:" + this.counter);   
  }


});

  return await modal.present();
}

// ******Funciones modal 3***
async openModal3() {
  const modal = await this.modalController.create({
    component: CovidmodalPage,
    componentProps: {
      paramTitle: 'Estimado Usuario:',
      // tslint:disable-next-line: max-line-length
      paramID: '1. ¿Ha presentado usted alguno de los síntomas asociados al nuevo coronavirus (COVID-19) en los últimos 14 días?',
      hiddenQ: false,
      hiddenQNA: true,
      hiddenMenu: true
    }
  });

  // pasa el dato del radio Buton al cerrar el modal
  modal.onDidDismiss().then((dataReturned) => {    
    if (dataReturned !== null) {     
      this.dataReturned = dataReturned.data;
      this.counter = this.counter + parseInt(this.dataReturned, 10);
      this.covid.answer_1 = this.dataReturned == '1' ? 0 : 1 ;
      // console.log("Dato llegado:" + this.counter);    
    }
  });
  

  this.openModal4();

  return await modal.present();
}


// ******Funciones modal 4***
async openModal4() {
  const modal = await this.modalController.create({
    component: CovidmodalPage,
    componentProps: {
      paramTitle: 'Estimado Usuario:',
      // tslint:disable-next-line: max-line-length
      paramID: 'Atendiendo a las recomendaciones del Ministerio de Salud y del Instituto Nacional de Salud, y con el fin de identificar, prevenir y controlar la propagación del COVID-19 en territorio nacional, por su salud, la de su familia y la de nuestros usuarios, amablemente le pedimos se sirva responder las siguientes preguntas antes de continuar con su Web Check-In:',
      hiddenQ: true,
      hiddenMenu: false
     
    }
  });

  
  return await modal.present();
}


// metodo que valida las respuestas

validAnswers(){

  if (this.counter === 5){
   this.ishidden = false;
   this.ishiddenForm = true; // Esconde el Formulario
   this.ishiddenForm1 = true; // Esconde el Formulario 1
  } else {
  this.presentToastWithOptions(); // presenta el TOAST
  this.ishiddenForm = true; // Esconde el Formulario
  this.ishiddenForm1 = true; // Esconde el Formulario 1
  this.ishidden = false;
  }
}


// ****Toast Present****** codigo pra presentar el TOAST
async presentToastWithOptions() {
  const toast = await this.toastController.create({
    color : 'medium',
    header: 'Señor Usuario',
    // tslint:disable-next-line: max-line-length
    message: 'Recuerde estar con dos (02) horas de anticipación a la hora de vuelo en el Aeropuerto de salida.',
    position: 'middle',
    buttons: [
      {
        side: 'start',
        icon: 'hand',
        text: ' ',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cerrar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  toast.present();
}


// -----------------------------------------------
//   Formulario Tamizaje
// -----------------------------------------------

onFormSubmit(form: NgForm) { // Formulario 0

  // console.log(form.value);

  if (form.invalid)
   {
     return;
  }

  // si todo Ok
  
  this.covid.name = this.name
  this.covid.dni = this.dni
  this.covid.nationality = this.nationality
  this.covid.flight = this.flight

  // console.log(this.covid);  

  this.openModal(); // abre el primer modal (modal 4)
    
}

// metodo para enviar el data a la BD
enviarData(form: NgForm) { // Formulario 1

  // console.log(form.value); 

  
  if (form.invalid)
   {
     return;
  }

  // si todo Ok  
  this.validAnswers()

  let key = btoa(btoa("covid"));//llave movil

  this.covid.key = key;
  this.covid.dirIp = '00000'

  console.log(this.covid);

  this.covidService.registroCovid(this.covid)
                    .subscribe((resp: any) => {

                      // console.log(resp);                                    

                   },
                   err => {
                     console.log('HTTP Error', err.error);

                      },
                  () => console.log('HTTP request completed.')
                );

  
  

    
}




}// END class
