import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  constructor(public alertController: AlertController, private router: Router) { }
  
  async onClickLogin() {
    const alert = await this.alertController.create({
      header: 'Iniciar sesion',
      mode: "ios",
      inputs: [
        {
          name: 'correo',
          type: 'text',
          placeholder: 'Email'
        },
        {
          name: 'pass',
          type: 'text',
          placeholder: 'Contraseña'
        },
      ],
      buttons: [
        {
          text: 'Ingresar',
          cssClass: 'success',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Cancelar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() { }

  onClickRegistro() {
    this.router.navigate(["/register"]);
  }
}
