import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const tokenKey = 'token_sanctum';
  const userKey = 'user_data';
  let token = localStorage.getItem(tokenKey);

  let authRequest = req;
  if (!token)
    token = sessionStorage.getItem(tokenKey);

  if (token) {
    authRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(authRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        localStorage.removeItem(tokenKey);
        localStorage.removeItem(userKey);
        sessionStorage.removeItem(tokenKey);
        sessionStorage.removeItem(userKey);
        router.navigate(['/']);
      }
      return throwError(() => error);
    })
  );
};
