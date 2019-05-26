import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async onClickRegistro(){
    const alert = await this.alertController.create({
      header: 'Codigo de validacion',
      mode: "ios",
      inputs: [
        {
          name: 'codigo',
          type: 'number',
          placeholder: 'Codigo'
        },
      ],
      buttons: [
        {
          text: 'Enviar',
          cssClass: 'success',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'salir',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
