import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Por defecto las peticiones http por este mdio son inmutables
    console.log('Intercepted! ', req);
    // const copyReq = req.clone({headers: req.headers.set('token', this.authService.getToken())});
    const copyReq = req.clone({params: req.params.set('auth', this.authService.getToken())});
    return next.handle(copyReq);
  }
}
