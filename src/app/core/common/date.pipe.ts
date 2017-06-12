import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'dateFormats'
})
export class DateFormatsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let dateFormats= "";
    if (value) {
      dateFormats = moment(value, 'MM/DD/YYYY').format('DD/MM/YYYY');
    }
    return dateFormats;
  }

}
