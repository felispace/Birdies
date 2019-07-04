import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BandejaMensajesPage } from './bandeja-mensajes.page';

const routes: Routes = [
  {
    path: '',
    component: BandejaMensajesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BandejaMensajesPage]
})
export class BandejaMensajesPageModule {}
