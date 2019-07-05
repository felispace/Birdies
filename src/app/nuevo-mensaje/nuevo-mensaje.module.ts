import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NuevoMensajePage } from './nuevo-mensaje.page';
import { importType } from '@angular/compiler/src/output/output_ast';
import { ComponentFactoryBoundToModule } from '@angular/core/src/linker/component_factory_resolver';

const routes: Routes = [
  {
    path: '',
    component: NuevoMensajePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    
   ],
  declarations: [NuevoMensajePage]
})
export class NuevoMensajePageModule {}
