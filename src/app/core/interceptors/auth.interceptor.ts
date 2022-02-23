import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from "@modules/auth/services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let req = request;
    if ( this.authService.isLogged() ) {
      req = req.clone( {
        setHeaders: {
          authorization: `Bearer ${ this.authService.getUserData()!.access_token}`
        }
      } );
    }
    return next.handle(req);
  }

}
