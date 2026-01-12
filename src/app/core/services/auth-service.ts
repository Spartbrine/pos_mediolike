import { isPlatformBrowser } from '@angular/common';
import { computed, Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { User } from '../../features/user/user.interface';
import { ApiBaseService } from './api-base-service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response-interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiBaseService {
  private accessTokenSignal = signal<string | null>(null);
  private userSignal = signal<User | null>(null);
  private tokenKey = 'token_sanctum';
  private userKey = 'user_data';
  private isBrowser: boolean = false;
  readonly isAuthenticated$ = computed(() => {
    const token = this.accessTokenSignal();
    return !!token;
  });


  constructor(
    protected override http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    super(http);
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.loadStoredData();
  }

  login(email: string, password: string, rememberMe: boolean): Observable<AuthResponse> {
    return this.post<AuthResponse>('login', { email, password }).pipe(
      tap(response => {
        this.storeAuthData(response.token, response.user, rememberMe);
      }),
      catchError(error => {
        console.error('Ocurrió un error durante el inicio de sesión:', error);
        return throwError(() => new Error('Error en el inicio de sesión'));
      })
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.userKey);
    this.accessTokenSignal.set(null);
    this.userSignal.set(null);
    this.router.navigateByUrl('/');
  }

  private storeAuthData(token: string, user: User, rememberMe: boolean) {
    this.accessTokenSignal.set(token);
    this.userSignal.set(user);

    if (this.isBrowser) {
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem(this.tokenKey, token);
      storage.setItem(this.userKey, JSON.stringify(user));
    }
  }

  protected loadStoredData() {
    if (this.isBrowser) {
      let token = localStorage.getItem(this.tokenKey);
      let userData = localStorage.getItem(this.userKey);

      if (!token || !userData) {
        token = sessionStorage.getItem(this.tokenKey);
        userData = sessionStorage.getItem(this.userKey);
      }

      if (token && userData) {
        const user = JSON.parse(userData);
        this.userSignal.set(user);
        this.accessTokenSignal.set(token);
      } else {
        console.error('No se detectó información de autenticación almacenada.');
      }
    }
  }

}
