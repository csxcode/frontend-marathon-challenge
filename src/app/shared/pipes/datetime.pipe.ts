import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs'

@Pipe( { name: 'datetime' } )
export class DatetimePipe implements PipeTransform {
    transform( value: string, format = 'DD/MM/YYYY' ): string {
        try {
            return dayjs(value).format(format)
        } catch ( e ) {
            return value.toString();
        }

    }
}
