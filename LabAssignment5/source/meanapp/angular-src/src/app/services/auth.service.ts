import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }

  registerUser(user){
    return this.http.post('http://localhost:3000/users/register', user);
  }
  updateUser(user){
    console.log("reached auth service");
    return this.http.put('http://localhost:3000/users/update', user);
  }

  authenticateUser(user){
    return this.http.post('http://localhost:3000/users/authenticate', user);
  }

  getProfile() {
    this.loadToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };

    return this.http.get('http://localhost:3000/users/profile', httpOptions);
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
