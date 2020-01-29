import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toBold'
})
export class ToBoldPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value.bold();
  }

}
