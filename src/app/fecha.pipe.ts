import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: any, arg): any {

    let final: any;
    let dia = value.getDate().toString();
    let mes = value.getMonth().toString();
    let ano = value.getFullYear().toString();

    final= "Nacido el: "+dia+ " de "+mes+ " de "+ ano

    return final;

  }

}
