import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToStr'
})
export class DateToStrPipe implements PipeTransform {

  // Date est le type d'entré et string est le type de sortie
  transform(value: Date, ...args: any[]): string {
    return value.getDate() + '/'
      // comme janvier égale à 0 on doit faire + 1
      // petit test pour mettre le 0 avant si inferieur à 10
      + (value.getMonth() < 9 ? '0' + (value.getMonth() + 1) : value.getMonth() + 1) + '/' + value.getFullYear()
      + ' à ' + value.getHours() + ':' + value.getMinutes();
  }

}
