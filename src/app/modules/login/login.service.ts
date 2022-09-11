import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginResponse } from './login-response';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  endopoint: string = environment.loginEndpoint;

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.endopoint, {
      email,
      password,
    });
  }
}
