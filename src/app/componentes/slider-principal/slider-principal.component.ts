import { Component, OnInit } from '@angular/core';
import { Paso } from 'src/app/models/paso';

@Component({
  selector: 'app-slider-principal',
  templateUrl: './slider-principal.component.html',
  styleUrls: ['./slider-principal.component.scss'],
})
export class SliderPrincipalComponent implements OnInit {
  pasos: Paso[] = [
    {nombre: 'Paso 1', descripcion: 'Registrate', imagen: 'sliderPrincipal/registrate.png'},
    {nombre: 'Paso 2', descripcion: 'Apuntate', imagen: 'sliderPrincipal/apuntate.png'},
    {nombre: 'Paso 3', descripcion: 'Juega', imagen: 'sliderPrincipal/juega.png'}
  ];
  constructor() { }

  ngOnInit() {}

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

}
