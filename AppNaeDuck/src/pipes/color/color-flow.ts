import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'colorbackgroundFlow'
})
export class ColorFlow implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
    constructor() {

  }
  transform(value: boolean) {
      let returnvalue = '';
      if (value ) {
        returnvalue = 'enable-backgrould-color';
      } else {
        returnvalue = 'disable-backgrould-color';
      }

      return returnvalue;
    }
}
