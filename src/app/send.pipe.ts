import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'send'
})
export class SendPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return 'Envoyé le: ' + value;
  }

}
