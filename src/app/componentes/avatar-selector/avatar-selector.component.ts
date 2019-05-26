import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss'],
})
export class AvatarSelectorComponent implements OnInit {
  opSlider = {
    slidesPerView: 3,
    freeMode: true
  };
  constructor() { }

  ngOnInit() { }

}
