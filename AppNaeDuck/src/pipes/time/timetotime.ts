import { Pipe, PipeTransform } from '@angular/core';
/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'timetoTimeConvert',
})
export class TimetoTimePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
    constructor() {

    }
    transform(value: string) {


        return value.substring(11, 16);;



    }
}
