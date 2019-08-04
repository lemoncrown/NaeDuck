import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'colorbackgroundSeat'
})
export class ColorSeat implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
    constructor() {

  }
    transform(value: number) {
      let returnvalue = '';
      if (value == null || value < 0) {
        returnvalue = 'enable-backgrould-color';
      } else {
        if (value > 0) {
          returnvalue = 'disable-backgrould-color';
        } else {
          returnvalue = 'disable-backgrould-color';
        }
      }
      // returnvalue = 'error-backgrould-color';

      return returnvalue;
    }
}
