import { Component, inject } from '@angular/core';
import { SessionService } from '../../../core/service/session.service';

@Component({
  imports: [],
  selector: 'app-patient-home-component',
  styleUrl: './patient-home-component.css',
  templateUrl: './patient-home-component.html',
})
export class PatientHomeComponent {
  //Usuario logueado

  private userService = inject(SessionService);
  usuario = this.userService.usuarioActual;
}
