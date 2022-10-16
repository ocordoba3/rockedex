import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformId'
})
export class TransformIdPipe implements PipeTransform {

  transform(id: number): string {
    return id.toString().padStart(3, "0"); 
  }

}
