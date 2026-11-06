import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse, LoginRequest, RegisterRequest, User } from '../models/auth.model';
import { Rol } from '../models/rol.enum';

const TOKEN_KEY = 'dt_token';
const USER_KEY = 'dt_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private url = `${environment.apiUrl}/api/auth`;

  private _usuario = signal<User | null>(this.leerUsuario());
  readonly usuario = this._usuario.asReadonly();
  readonly rol = computed(() => this._usuario()?.rol ?? null);

  login(req: LoginRequest) {
    return this.http
      .post<AuthResponse>(`${this.url}/login`, req)
      .pipe(tap((res) => this.guardarSesion(res)));
  }

  register(req: RegisterRequest) {
    return this.http
      .post<AuthResponse>(`${this.url}/register`, req)
      .pipe(tap((res) => this.guardarSesion(res)));
  }

  logout() {
    try {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    } catch {}
    this._usuario.set(null);
    this.router.navigate(['/']);
  }

  getToken(): string | null {
    try {
      return localStorage.getItem(TOKEN_KEY);
    } catch {
      return null;
    }
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.estaExpirado(token);
  }

  rutaInicial(rol: Rol): string {
    switch (rol) {
      case Rol.Paciente:
        return '/patient-dashboard';
      case Rol.Recepcionista:
        return '/receptionist-dashboard';
      case Rol.Odontologo:
        return '/dentist-dashboard';
      case Rol.Administrador:
        return '/admin';
    }
  }

  private guardarSesion(res: AuthResponse) {
    const usuario: User = {
      nombre: res.nombre,
      email: res.email,
      rol: res.rol,
      ID: res.ID,
      phone: res.phone
    };
    try {
      localStorage.setItem(TOKEN_KEY, res.token);
      localStorage.setItem(USER_KEY, JSON.stringify(usuario));
    } catch {}
    this._usuario.set(usuario);
  }

  private leerUsuario(): User | null {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  private estaExpirado(token: string): boolean {
    try {
      const payload = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      const { exp } = JSON.parse(atob(payload));
      return exp * 1000 < Date.now();
    } catch {
      return true;
    }
  }
}
