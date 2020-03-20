import { Component } from '@angular/core';
import { ServiceService } from './../services/service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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

  constructor(public Servicio : ServiceService) {}

  
}
