import { Component, inject } from '@angular/core';
import { SessionService } from '../../../core/services/session.service';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-patient-home-component',
  styleUrl: './patient-home-component.css',
  templateUrl: './patient-home-component.html',
  standalone: true,
})
export class PatientHomeComponent {
  //Usuario logueado

  private sessionService = inject(SessionService);
  protected User = this.sessionService.usuario;
  protected email = this.sessionService.email;
  protected phone = this.sessionService.phone;

  // Valores originales para detectar modificaciones

  private correoOriginal: string = this.email();

  private telefonoOriginal: string = this.phone();

  // Campos editables

  correo: string = this.email();

  telefono: string = this.phone();

  // ============================
  // CITA ACTUAL
  // ============================

  citaActual: any = {
    especialidad: 'Odontología general',
    profesional: 'Dr. Carlos Rodríguez',
    fecha: '15 de octubre de 2026',
    hora: '10:00 AM',
    estado: 'Agendada',
  };

  // ============================
  // DETECTAR CAMBIOS
  // ============================

  get datosModificados(): boolean {
    return this.correo !== this.correoOriginal || this.telefono !== this.telefonoOriginal;
  }

  // ============================
  // ACTUALIZAR DATOS
  // ============================

  actualizarDatos(): void {

  }

  // ============================
  // REFRESCAR CITA
  // ============================

  refrescarCita(): void {}

  // ============================
  // CANCELAR CITA
  // ============================

  cancelarCita(): void {}
}
