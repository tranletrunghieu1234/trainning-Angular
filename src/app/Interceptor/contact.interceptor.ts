import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContactInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   /// khi đi qua chặn các request lại 
   const myToken="Nokia"
   const authReq = request.clone({
     setHeaders : {"Authorization":myToken}
   })
   console.log(request)

    return next.handle(authReq);
  }
}
