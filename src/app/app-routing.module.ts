import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login/:id', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'onboard', loadChildren: './onboard/onboard.module#OnboardPageModule' },
  { path: 'bandeja-mensajes', loadChildren: './bandeja-mensajes/bandeja-mensajes.module#BandejaMensajesPageModule' },
  { path: 'nuevo-mensaje', loadChildren: './nuevo-mensaje/nuevo-mensaje.module#NuevoMensajePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
