import { Pipe, PipeTransform } from '@angular/core';
import { parseISO, format } from 'date-fns';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: string): string {
    return format(parseISO(date), 'dd-MM-yyyy HH:mm');
  }

}
