import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  account: { email: string, password: string,mobile:string } = {
    email: '',
    password: '',
    mobile:'',
  };
  constructor(public formBuilder: FormBuilder,public router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      mobile:['',[Validators.required]],
      password: ['', [
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}$")
      ]],
    })
  }
  get errorControl() {
    return this.loginForm.controls;
  }

  async submitForm() {

    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      return false;
    } else {
      localStorage.setItem("loginObj", JSON.stringify(this.account));
      this.router.navigate(['/home']);


    }
  }

}
