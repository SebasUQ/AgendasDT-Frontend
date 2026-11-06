
import { computed, inject, Injectable} from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root', // Singleton: una sola instancia para toda la app
})
export class SessionService {
  private auth = inject(AuthService);
  readonly usuario = this.auth.usuario;
  readonly id = computed(() => this.usuario()?.ID ?? 0);
  readonly nombre = computed(() => this.usuario()?.nombre ?? '');
  readonly email = computed(() => this.usuario()?.email ?? '');
  readonly phone = computed(() => this.usuario()?.phone ?? '');
}
