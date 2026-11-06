import { Rol } from './rol.enum';

export interface LoginRequest {
  email: string;
  password: string;
}
export interface RegisterRequest {
  documento: string;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  email: string;
  telefono: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  rol: Rol;
  nombre: string;
  email: string;
  ID: number;
  phone: string;
}

export interface User {
  nombre: string;
  email: string;
  rol: Rol;
  ID: number;
  phone: string;
}
