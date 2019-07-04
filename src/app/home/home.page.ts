import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user_name = 'Felipe Gonzalez';
  
  constructor(
    private router: Router,
    private NavCtrl: NavController
  ) {}
  
    LoginNavCtrl(){
      this.NavCtrl.navigateForward('/login/${ this.user_name }');
    }
}
