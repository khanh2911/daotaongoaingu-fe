import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const excludedUrls = [
      '/api/tai-khoan/dang-nhap',
      '/api/tai-khoan/kiem-tra-dang-nhap',
    ];
    const user = this.storageService.getUser();
    if (user.token != null && !excludedUrls.some((url) => req.url.includes(url))) {
      req = this.addTokenHeader(req, user.token);
    }
    return next.handle(req).pipe(
      catchError((error) => {
        console.error('Có lỗi xãy ra:', error);
        return throwError(() => error);
      })
    );
  }

  private addTokenHeader(
    req: HttpRequest<any>,
    token: string
  ): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
