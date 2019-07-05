import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalNuevoMensajePage } from './modal-nuevo-mensaje.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNuevoMensajePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalNuevoMensajePage]
})
export class ModalNuevoMensajePageModule {}
