import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: any, arg): any {
    let mesString: any;
    let final: any;
    let dia = value.getDate().toString();
    let mes = (value.getMonth() + 1).toString();
    let ano = value.getFullYear().toString();

    if(mes==1){
        mesString="Enero"
    }else if(mes==2){
        mesString="Febrero"
    }else if(mes==3){
      mesString="Marzo"
    }else if(mes==4){
      mesString="Abril"
    }else if(mes==5){
      mesString="Mayo"
    }else if(mes==6){
      mesString="Junio"
    }else if(mes==7){
      mesString="Julio"
    }else if(mes==8){
      mesString="Agosto"
    }else if(mes==9){
      mesString="Septiembre"
    }else if(mes==10){
      mesString="Octubre"
    }else if(mes==11){
      mesString="Noviembre"
      }else if(mes==12){
        mesString="Diciembre"
    }

    final= "Nacido el: "+dia+ " de "+mesString+ " de "+ ano

    return final;

  }

}
