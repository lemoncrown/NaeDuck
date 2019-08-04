import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showCastingList',
})
export class ShowCastingListPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
    constructor() {

    }
    transform(value: any, filter: number) {

      console.log(filter);
        return value.filter(
            task => task.SHOW_RAWID === filter);


    }

 
}
