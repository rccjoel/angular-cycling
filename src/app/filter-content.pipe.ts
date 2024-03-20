import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterContent',
  standalone: true
})
export class FilterContentPipe implements PipeTransform {

  transform(value: Content[], contentType?: string): Content[] {

    if (!contentType) {
      return value.filter((item) => !item.type);
    }

    return value.filter((item) => item.type === contentType);
  }

}
