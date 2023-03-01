import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = "";
  password = "";

  constructor (private auth: AuthService, private router: Router){
  }

  login() {
    if(this.auth.login(this.email, this.password)) {
      this.router.navigate(["protected-page"]);
      return;
    }

    alert("Invalid login");
    this.email = "";
    this.password = "";
  }
}
