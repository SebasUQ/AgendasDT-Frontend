import { Component, inject, Input } from '@angular/core';
import { SessionService } from '../../../core/services/session.service';
import { ConfirmDialogComponent } from '../confirm-dialog-component/confirm-dialog-component';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  imports: [ConfirmDialogComponent],
  selector: 'app-user-navbar-component',
  styleUrl: './user-navbar-component.css',
  templateUrl: './user-navbar-component.html',
})
export class UserNavbarComponent {
  @Input()
  userRole: string = '';

  private auth = inject(AuthService);
  private sessionService = inject(SessionService);

  protected nombre = this.sessionService.nombre;

  mostrarDialogo = false;

  logout() {
    this.auth.logout();
    this.mostrarDialogo = false;
  }

  protected cerrarDialogo() {
    this.mostrarDialogo = false;
  }
}
