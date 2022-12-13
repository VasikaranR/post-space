import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './registerDatamodel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {



  constructor(private http:HttpClient) { }
     

    
  postReg(data:Register){
    return this.http.post(`https://gorest.co.in/public/v2/users`,data)
  }

 
  
}
