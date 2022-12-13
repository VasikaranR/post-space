import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getLogin(name:any){
    return this.http.get(`https://gorest.co.in/public/v2/users?name=${name}`)
  }
}
