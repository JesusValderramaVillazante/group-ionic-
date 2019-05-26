import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { SliderPrincipalComponent } from './slider-principal/slider-principal.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [AvatarSelectorComponent, FooterComponent, SliderPrincipalComponent],
  exports: [AvatarSelectorComponent, FooterComponent, SliderPrincipalComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentesModule { }
