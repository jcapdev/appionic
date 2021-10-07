import { Component } from '@angular/core';
//importamos ModalController
import { ModalController } from '@ionic/angular';
//importamos SplashComponente 
import { SplashComponent } from './splash/splash.component';

import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  //disparamos el modal
  constructor( private modalController: ModalController) {
    this.presentSplash();
  }


  async presentSplash() {
    const modal = await this.modalController.create({
      component: SplashComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  
}
