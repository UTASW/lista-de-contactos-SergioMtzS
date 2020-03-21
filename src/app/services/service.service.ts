import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  persona = 'GKo';
  nombre = '';
  titulo='';
  cont=-1;
  ping=0;
  bleengt:Boolean;
  blnSexo:boolean;
  strMessage: string;
  n:string="";
  co:string="";
  t:string="";
  no:string="";
  genero:string;
  genero2:boolean;
  lista: string;
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  arPersonas: Array<any> = [] as Array<JSON>;

  constructor(public alertController: AlertController) { }


  
  addperson(strnombre?: string,strcorreo?: string,strtele?: string,strnot?: string,strfec?: any){
    console.log(strfec)
    if(this.lista==="1"){
      this.blnSexo=true;
    }else if(this.lista==="2"){
      this.blnSexo=false;
    }
    this.strMessage="";
    this.bleengt=false;
    let sexo=this.blnSexo;

   
    (strnombre) ? this.fnerror():this.fnerror('Error falta llenar campo nombre');
    (strcorreo) ? (this.regexp.test(strcorreo)) ? this.fnerror():this.fnerror('Error: Error correo no valido'): this.fnerror('Error: Error favor de llenar el campo correo');
    (strtele) ? this.fnerror():this.fnerror('Error falta llenar campo telefono');
    (strnot) ? this.fnerror():this.fnerror('Error falta llenar campo nota');


    if(!this.bleengt){

    const jsonPersona: any ={
      strnombre,
      strcorreo,
      strtele,
      strnot,
      sexo,
      strfec
      
    };

    this.cont=this.cont+1;
    this.arPersonas.push(jsonPersona);
    this.titulo=strnombre;
    this.add();
    this.n="";
    this.t="";
    this.no="";
    this.co="";
    console.log(this.lista);
  }else{
    this.presentAlert();
  }
  }

  fnerror(msg?: string){

    if(msg){
      this.strMessage +=msg+'<br>';
      this.bleengt=true;
    }else if(this.bleengt){
      console.log('adios');
      this.bleengt=true;

    }else{
      this.bleengt=false;

    }
   
  }

  async add() {
    const alert = await this.alertController.create({
      header: 'Agregado',
      subHeader: this.titulo,
      message: this.strMessage,
      buttons: ['OK']
    });

    await alert.present();
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'UnexpectedError',
      subHeader: 'Error',
      message: this.strMessage,
      buttons: ['OK']
    });

    await alert.present();
  }

  muestra(){
    this.ping=this.ping+1;
      if(this.ping>1){
          this.ping=0;
      }
  }

  async presentAlertConfirm(i: number) {

    const alert = await this.alertController.create({
      header: this.arPersonas[i]['strnombre'],
      message: '¿Estas seguro que deseas eliminar?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sí',
          handler: () => {

            this.delete(i);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }


  delete(rt: number){

    this.arPersonas.splice(rt,1);
    this.cont=1;
  }
}
