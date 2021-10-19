import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  isSubmitted = false;
  account: { email: string, password: string, mobile: string } = {
    email: '',
    password: '',
    mobile: '',
  };
  constructor(public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      mobile: ['', [Validators.required]],
    })
  }
  get errorControl() {
    return this.registerForm.controls;
  }

  async submitForm() {

    this.isSubmitted = true;
    if (!this.registerForm.valid) {
      return false;
    } else {
      localStorage.setItem("registerObj", JSON.stringify(this.account));
      this.router.navigate(['/home']);
    }
  }

}
