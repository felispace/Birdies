import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-nuevo-mensaje',
  templateUrl: './nuevo-mensaje.page.html',
  styleUrls: ['./nuevo-mensaje.page.scss'],
})
export class NuevoMensajePage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  ModalNuevoMensaje(){

      this.modalCtrl.create({
          component : ModalInfoPage
      })
  }
}
