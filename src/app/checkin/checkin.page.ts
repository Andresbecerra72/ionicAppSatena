import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CovidmodalPage } from '../covidmodal/covidmodal.page'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-checkin',
  templateUrl: 'checkin.page.html',
  styleUrls: ['checkin.page.scss']
})
export class CheckinPage {
  dataReturned:any;
  public counter : number = 0; //cuanta las veces que responden "NO"
  ishidden:boolean;

  //CONSTRUCTOR
  constructor(public modalController: ModalController,  public toastController: ToastController) {
      this.openModal();//abre el primer modal (modal 4)
      this.ishidden = true; //esconde el embeded del checkin    
  }

//******Funciones modal 0*** ULTIMA PREGUNTA
async openModal() {
  const modal = await this.modalController.create({
    component: CovidmodalPage,
    componentProps: {
      "paramTitle": "Estimado Usuario:",
      "paramID": "4. ¿Las personas con las que hizo contacto directo, presentan los síntomas característicos del coronavirus COVID-19?",
      "hiddenQ": false,
      "hiddenMenu": true
    }
  });

  this.openModal1();

  //pasa el dato del radio Buton al cerrar el modal
  modal.onDidDismiss().then((dataReturned) => {
    if (dataReturned !== null) {     
      this.dataReturned = dataReturned.data;
      this.counter = this.counter + Number(this.dataReturned);
      console.log("Dato llegado:" + this.counter);   
    }
  });


  return await modal.present();
}


//******Funciones modal 1***
async openModal1() {
  const modal = await this.modalController.create({
    component: CovidmodalPage,
    componentProps: {
      "paramTitle": "Estimado Usuario:",
      "paramID": "3. ¿Ha presentado alguno o varios de los siguientes síntomas durante los últimos 5 días?",
      "param1": " -Secreción y goteos nasales",
      "param2": " -Dolor de garganta y cabeza",
      "param3": " -Tos seca",
      "param4": " -Fiebre superior a 37,5 C durante 3 o más días",
      "param5": " -Dificultad para respirar",
      "param6": " -Fatiga",
      "hiddenQ": false,
      "hiddenMenu": true
      
    }
  });

  

  this.openModal2();

  //pasa el dato del radio Buton al cerrar el modal
  modal.onDidDismiss().then((dataReturned) => {
    if (dataReturned !== null) {     
      this.dataReturned = dataReturned.data;
      this.counter = this.counter + Number(this.dataReturned);
     // console.log("Dato llegado:" + this.counter);
     
    }
  });

  return await modal.present();
}


//******Funciones modal 2***
async openModal2() {
  const modal = await this.modalController.create({
    component: CovidmodalPage,
    componentProps: {
      "paramTitle": "Estimado Usuario:",
      "paramID": "2. ¿Ha estado usted en contacto directo en los últimos 14 días con personas que hayan estado en zonas específicas (ej: estadios, cines, centros comerciales, hospitales, centros clínicos, lugares de aglomeración de público, centros geriátricos, casas de personas identificadas como enfermas y/o contagiadas, etc) donde se haya confirmado la presencia del coronavirus COVID-19?",
      "hiddenQ": false,
      "hiddenMenu": true
    }
  });

  

 this.openModal3();

 //pasa el dato del radio Buton al cerrar el modal
 modal.onDidDismiss().then((dataReturned) => {
  if (dataReturned !== null) {     
    this.dataReturned = dataReturned.data;
    this.counter = this.counter + Number(this.dataReturned);
     // console.log("Dato llegado:" + this.counter);   
  }


});

  return await modal.present();
}

//******Funciones modal 3***
async openModal3() {
  const modal = await this.modalController.create({
    component: CovidmodalPage,
    componentProps: {
      "paramTitle": "Estimado Usuario:",
      "paramID": "1. ¿Ha estado usted en los últimos 14 días fuera del país, específicamente en alguna zona donde se haya confirmado la presencia del coronavirus COVID-19?",
      "hiddenQ": false,
      "hiddenMenu": true
    }
  });

  //pasa el dato del radio Buton al cerrar el modal
  modal.onDidDismiss().then((dataReturned) => {
    if (dataReturned !== null) {     
      this.dataReturned = dataReturned.data;
      this.counter = this.counter + Number(this.dataReturned);
     // console.log("Dato llegado:" + this.counter);    
    }
  });
  

  this.openModal4();

  return await modal.present();
}


//******Funciones modal 4***
async openModal4() {
  const modal = await this.modalController.create({
    component: CovidmodalPage,
    componentProps: {
      "paramTitle": "Estimado Usuario:",
      "paramID": "Atendiendo a las recomendaciones del Ministerio de Salud y del Instituto Nacional de Salud, y con el fin de identificar, prevenir y controlar la propagación del COVID-19 en territorio nacional, por su salud, la de su familia y la de nuestros usuarios, amablemente le pedimos se sirva responder las siguientes preguntas antes de continuar con su Web Check-In:",
      "hiddenQ": true,
      "hiddenMenu": false
     
    }
  });

  


  return await modal.present();
}


//metodo que vaida las raspuestas

validAnswers(){

  if(this.counter === 4){
 this.ishidden = false;
  }else{
  this.presentToastWithOptions(); //presenta el TOAST
  }
}


//****Toast Present****** codigo pra presentar el TOAST
async presentToastWithOptions() {
  const toast = await this.toastController.create({
    color : 'medium',
    header: 'Señor Usuario',
    message: 'Para efectuar el proceso de Check–In deberá acercarse al counter de SATENA ubicado en el AEROPUERTO de salida, recuerde estar con dos (02) horas mínimo de anticipación a la hora de vuelo.',
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


}//end
