import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bandeja-mensajes',
  templateUrl: './bandeja-mensajes.page.html',
  styleUrls: ['./bandeja-mensajes.page.scss'],
})
export class BandejaMensajesPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }
  ngOnInit() {
  }

  onClickNuevoMensaje(){
    this.navCtrl.navigateForward('/nuevo-mensaje')
  }
}
