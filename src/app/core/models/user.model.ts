import { Rol } from './rol.enum';

export interface UserResponse {
  id: number;
  name: string;
  lastname: string;
  birthday: Date;
  email: string;
  phone: string;
  rol: Rol;
  version: number;
}

export interface UserCreateRequest {
  id: number;
  name: string;
  lastname: string;
  birthday: Date;
  email: string;
  phone: string;
  rol: Rol;
}

export interface UserUpdateRequest {
  id: number;
  name: string;
  lastname: string;
  birthday: Date;
  email: string;
  phone: string;
  rol: Rol;
  version: number;
}
