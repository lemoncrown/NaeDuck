import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'secondWithSplit'
})
export class SecondWithSplit implements PipeTransform {

    constructor() {

    }
    transform(value: string) {


      var arrValue = value.split('^');

      if (arrValue.length > 1) {
        return arrValue[1];
      } else {
        return '';
      }


    }
}
