import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user_name = null;

  constructor(
    private ActivatedRoute: ActivatedRoute
  ) { 
  }

  ngOnInit() {
    this.user_name = this.ActivatedRoute.snapshot.paramMap.get('id');
  }

}
