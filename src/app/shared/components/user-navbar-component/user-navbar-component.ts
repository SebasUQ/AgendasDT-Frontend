import { Component, inject, Input } from '@angular/core';
import { SessionService } from '../../../core/services/session.service';

@Component({
  imports: [],
  selector: 'app-user-navbar-component',
  styleUrl: './user-navbar-component.css',
  templateUrl: './user-navbar-component.html',
})
export class UserNavbarComponent {

  @Input()
  userRole: string = "";

  private userService = inject(SessionService);
  usuario = this.userService.usuarioActual;

  logout() {}
}
