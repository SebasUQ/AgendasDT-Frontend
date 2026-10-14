import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dentist-home-component',
  styleUrl: './dentist-home-component.css',
  templateUrl: './dentist-home-component.html',
})
export class DentistHomeComponent {
  // Esta lista se llenará posteriormente con la respuesta HTTP del backend.
  citas: Meeting[] = [];

  citaSeleccionadaId: number | null = null;

  get totalCitas(): number {
    return this.citas.length;
  }

  get pacientesAtendidos(): number {
    return this.citas.filter((cita) => cita.estado === 'Atendido').length;
  }

  seleccionarCita(cita: Meeting): void {
    this.citaSeleccionadaId = this.citaSeleccionadaId === cita.id ? null : cita.id;
  }

  marcarComoAtendido(): void {
    if (this.citaSeleccionadaId === null) {
      return;
    }

    const cita = this.citas.find((item) => item.id === this.citaSeleccionadaId);

    if (!cita || cita.estado === 'Atendido') {
      return;
    }

    this.citas = this.citas.map((item) =>
      item.id === this.citaSeleccionadaId ? { ...item, estado: 'Atendido' as const } : item,
    );

    this.citaSeleccionadaId = null;
  }
}
