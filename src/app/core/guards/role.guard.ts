import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Rol } from '../models/auth.model';

export const roleGuard: CanActivateFn = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const permitidos = route.data['roles'] as Rol[] | undefined;
  const rol = auth.rol();

  if (!rol) return router.createUrlTree(['/auth/login']);
  if (!permitidos || permitidos.includes(rol)) return true;

  return router.createUrlTree([auth.rutaInicial(rol)]);
};
