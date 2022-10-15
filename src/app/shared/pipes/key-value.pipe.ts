import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValue'
})
export class KeyValuePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    
    const keyValues = JSON.parse(JSON.stringify(args[0]));
    return keyValues[value];
  }

}
