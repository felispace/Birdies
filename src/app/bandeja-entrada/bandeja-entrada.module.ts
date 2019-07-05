import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BandejaEntradaPage } from './bandeja-entrada.page';

const routes: Routes = [
  {
    path: '',
    component: BandejaEntradaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BandejaEntradaPage]
})
export class BandejaEntradaPageModule {}
