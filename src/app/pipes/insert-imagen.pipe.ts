import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'insertImagen'
})
export class InsertImagenPipe implements PipeTransform {
  rutaBase: string = './assets/img/';
  constructor(private domSanitizer: DomSanitizer) { };
  transform(ruta: string, args: string): any {
    return this.domSanitizer.bypassSecurityTrustUrl(`${this.rutaBase}${args}`);
  }

}
