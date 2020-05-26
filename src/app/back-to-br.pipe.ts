import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backToBr'
})
export class BackToBrPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    // expression regulier (avec /g) pour que le retour à la ligne marche a chaque fois
    // sinon replace le fait qu'a la premiere instance
    return value.replace(/\n/g, '<br />');
  }
}
