import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: any;
  loginUsers: any;

  constructor(public router:Router) {
    this.loginUsers = JSON.parse(localStorage.getItem("registerObj"));
  }

  gotoLogout() {
    localStorage.removeItem("registerObj");
    localStorage.removeItem("loginObj");
    this.router.navigate(['/login']);
  }

}
