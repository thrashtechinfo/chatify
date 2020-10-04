import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private configService: ConfigService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${this.configService.getAuthToken()}`,
      },
    });
    
    return next.handle(request);
  }
}
