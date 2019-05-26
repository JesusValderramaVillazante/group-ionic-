import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertImagenPipe } from './insert-imagen.pipe';

@NgModule({
  declarations: [InsertImagenPipe],
  exports: [InsertImagenPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
