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
    if (!this.loginForm.valid) return;

    this.submitted = true;

    const { email, password } = this.loginForm.value;

    this.loginService.login(email, password).subscribe({
      next: ({ token }) => {
        localStorage.setItem('token', token);
      },
      error: () => {
        this.submitted = false;
        this.errorSwal.fire();
      },
    });
  }
}
