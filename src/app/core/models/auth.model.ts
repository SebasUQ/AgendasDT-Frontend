export type Rol = 'Administrador' | 'Recepcionista' | 'Odontologo' | 'Paciente';

export interface LoginRequest {
  email: string;
  password: string;
}
export interface RegisterRequest {
  nombre: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  rol: Rol;
  nombre: string;
  email: string;
}

export interface User {
  nombre: string;
  email: string;
  rol: Rol;
}
