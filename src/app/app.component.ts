import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    public router: Router,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

    });

    let loginUserData = JSON.parse(localStorage.getItem("loginObj"));

    if (loginUserData) {
      this.router.navigate(['/home']);
    } else {
      //navigate to login page
      this.router.navigate(['/login']);
    }
  }

}
