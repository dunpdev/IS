import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'https://localhost:44345/api/Authorization/login';
  constructor(private http: HttpClient) {}
  login(credentials: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(
      this.url,
      { userName: 'miljen', password: 'Miljan!234' },
      {
        headers: headers,
      }
    );
  }
  logout() {
    localStorage.removeItem('token');
  }
  isLogged(): Boolean {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if (!token) return false;
    const isExpired = jwtHelper.isTokenExpired(token);
    return !isExpired;
  }
}
