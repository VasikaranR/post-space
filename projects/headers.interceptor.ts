import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const apikey='f98555144eb5aef7f0a128c65f6b5a96195b147638e698625078142cc34502c8'
    request=request.clone({
      setHeaders:{
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    
    return next.handle(request);
  }
}
