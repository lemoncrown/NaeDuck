import { Pipe, PipeTransform } from '@angular/core';
/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
    name: 'numberWithCommas'
})
export class NumberWithCommas implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
    constructor() {

    }
    transform(value: string) {


        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");



    }
}
