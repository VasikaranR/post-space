import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper:any = new JwtHelperService ();

  constructor() {}

   public isAuthenticated(): boolean {
    console.log('cameeee')
    const token:any = localStorage.getItem('token1');
    return !this.helper.isTokenExpired(token);
  }

   
}
