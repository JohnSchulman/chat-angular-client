import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'receive'
})
export class ReceivePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return 'Reçu le: ' + value;
  }

}
