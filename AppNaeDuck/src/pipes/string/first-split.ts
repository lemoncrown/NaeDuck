import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'firstWithSplit'
})
export class FirstWithSplit implements PipeTransform {

    constructor() {

    }
    transform(value: string) {


      var arrValue = value.split('^');

      if (arrValue.length > 0) {
        return arrValue[0];
      } else {
        return '';
      }


    }
}
