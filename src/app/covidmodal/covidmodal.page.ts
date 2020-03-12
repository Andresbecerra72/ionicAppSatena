import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-covidmodal',
  templateUrl: './covidmodal.page.html',
  styleUrls: ['./covidmodal.page.scss'],
})
export class CovidmodalPage implements OnInit {
  
  ishiddenQ: boolean; //variable para esconder los modales con radio button
  ishiddenMenu: boolean;  //varable para esconder el primer modal (Modal 4)
  modalTitle:string;
  modelId:string;
  model1:string;
  model2:string;
  model3:string;
  model4:string;
  model5:string;
  model6:string;
  hidden:string;
  selectedRadioGroup: any;
  check:boolean;
  validSelected: boolean;
  valueRadioB: string;
  public contno : number = 0;
  

 
  
 
  constructor(
    private modalController: ModalController,
    private navParams: NavParams   
  ) {
    this.validSelected = true;
   
  }
 
  ngOnInit() {
    
    //console.table(this.navParams);
    this.modalTitle = this.navParams.data.paramTitle;
    this.modelId = this.navParams.data.paramID;
    this.model1 = this.navParams.data.param1;
    this.model2 = this.navParams.data.param2;
    this.model3 = this.navParams.data.param3;
    this.model4 = this.navParams.data.param4;
    this.model5 = this.navParams.data.param5;
    this.model6 = this.navParams.data.param6;
    this.ishiddenQ = this.navParams.data.hiddenQ;
    this.ishiddenMenu = this.navParams.data.hiddenMenu;
    
  }


  //cierre el primer modal (modal 4)
  async closeModal() {
   
     const onClosedData: string = this.contno.toString(); //se pasa el dato del NO    
      await this.modalController.dismiss(onClosedData);
      this.check = false;
       
  }



      //permite el paso al siguiente modal para responder las preguntas
        async nextModal() {
          if (this.check === true) {           
            if (this.valueRadioB === 'no'){            
              this.contno += 1;                        
            }           
             this.check = false;
             this.closeModal();          
          }          
        }




      //seleccion de Radio Button
        radioGroupChange(event) {
          this.validSelected = false;// habilita el boton "Siguiente" para responder la siguiente pregunta
          //console.log(this.radioGroupChange, event.detail);
          this.selectedRadioGroup = event.detail;
          //console.log(this.selectedRadioGroup.value);
          this.check = true;
          this.valueRadioB = this.selectedRadioGroup.value; //asigna el valor del Radio Button

      }




      

}