import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  transform(value: string, limit?: number): string {
    limit = limit == undefined ? 10 : limit;
    return value.substring(0, limit) + ' ...';
  }
}
