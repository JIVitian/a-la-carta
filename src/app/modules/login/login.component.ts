import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: FormControl = new FormControl<string>('', [
    Validators.required,
    Validators.pattern(/\S/),
    Validators.email,
  ]);

  password: FormControl = new FormControl<string>('', [
    Validators.required,
    Validators.pattern(/\S/),
  ]);

  loginForm: FormGroup = new FormGroup({
    email: this.email,
    password: this.password,
  });

  constructor() {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log('invalid form');
    }
  }
}
