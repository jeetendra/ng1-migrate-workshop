import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'defaultImage'})
export class DefaultImagePipe implements PipeTransform {
  transform(input, def) {
    if (!input) {
      return def
    }
    return input;
  }
}