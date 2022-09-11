import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { LoginService } from './login.service';

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

  submitted: boolean = false;

  @ViewChild('errorSwal')
  public readonly errorSwal: SwalComponent;

  constructor(private loginService: LoginService) {}

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginService
        .login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe({
          next: result => console.log(result.token),
          error: () => this.errorSwal.fire(),
        });

      this.submitted = false;
    } else {
      console.log('invalid form');
      this.submitted = false;
    }
  }
}
