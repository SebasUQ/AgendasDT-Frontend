import { Component, inject, OnInit } from '@angular/core';
import { SessionService } from '../../../core/service/session.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  imports: [TitleCasePipe],
  selector: 'app-appointment-component',
  styleUrl: './appointment-component.css',
  templateUrl: './appointment-component.html',
})
export class AppointmentComponent implements OnInit {
  // Especialidades y profesionales disponibles

  specialties: specialty[] = [];
  professionals: professional[] = [];

  //Usuario logueado

  private userService = inject(SessionService);
  usuario = this.userService.usuarioActual;

  // Selección actual

  especialidadSeleccionada: specialty | null = null;

  profesionalSeleccionado: professional | null = null;

  fechaSeleccionada: Date | null = null;

  horaSeleccionada: string | null = null;

  // Calendario

  mesActual: Date = new Date();

  diasCalendario: DiaCalendario[] = [];

  // Horarios

  horariosDisponibles: string[] =
    ['08:00 AM', '8:45 AM', '9:30 AM', '10:15 AM', '11:00 AM', '11:45 AM',
    '2:00 PM', '2:45 PM', '3:30 PM'];

  ngOnInit(): void {
    this.generarCalendario();

    // Seleccionamos inicialmente la primera especialidad.
    this.seleccionarEspecialidad(this.specialties[0]);

    // Seleccionamos el primer día disponible.
    this.seleccionarFecha(new Date());
  }

  // =====================================================
  // ESPECIALIDAD
  // =====================================================

  seleccionarEspecialidad(especialidad: specialty): void {
    this.especialidadSeleccionada = especialidad;

    /*
     * Cuando cambia la especialidad debemos limpiar
     * el profesional seleccionado porque el anterior
     * podría no pertenecer a la nueva especialidad.
     */

    this.profesionalSeleccionado = null;
  }

  // =====================================================
  // PROFESIONALES FILTRADOS
  // =====================================================

  get profesionalesDisponibles(): professional[] {
    if (!this.especialidadSeleccionada) {
      return [];
    }

    return this.professionals.filter(
      (profesional) => profesional.specialtyId === this.especialidadSeleccionada!.id,
    );
  }

  // =====================================================
  // SELECCIONAR PROFESIONAL
  // =====================================================

  seleccionarProfesional(profesional: professional): void {
    this.profesionalSeleccionado = profesional;
  }

  // =====================================================
  // CALENDARIO
  // =====================================================

  generarCalendario(): void {
    const year = this.mesActual.getFullYear();

    const month = this.mesActual.getMonth();

    const primerDia = new Date(year, month, 1);

    const ultimoDia = new Date(year, month + 1, 0);

    /*
     * JavaScript:
     *
     * Domingo = 0
     * Lunes    = 1
     * ...
     * Sábado   = 6
     */

    let primerDiaSemana = primerDia.getDay();

    /*
     * Queremos que el calendario comience
     * en lunes.
     */

    primerDiaSemana = primerDiaSemana === 0 ? 6 : primerDiaSemana - 1;

    const dias: DiaCalendario[] = [];

    // Espacios antes del día 1.

    for (let i = 0; i < primerDiaSemana; i++) {
      dias.push({
        number: 0,

        date: new Date(),

        perteneceAlMes: false,
      });
    }

    // Días reales del mes.

    for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
      dias.push({
        number: dia,

        date: new Date(year, month, dia),

        perteneceAlMes: true,
      });
    }

    this.diasCalendario = dias;
  }

  // =====================================================
  // MES ANTERIOR
  // =====================================================

  mesAnterior(): void {
    this.mesActual = new Date(
      this.mesActual.getFullYear(),

      this.mesActual.getMonth() - 1,

      1,
    );

    this.generarCalendario();
  }

  // =====================================================
  // MES SIGUIENTE
  // =====================================================

  mesSiguiente(): void {
    this.mesActual = new Date(
      this.mesActual.getFullYear(),

      this.mesActual.getMonth() + 1,

      1,
    );

    this.generarCalendario();
  }

  // =====================================================
  // SELECCIONAR FECHA
  // =====================================================

  seleccionarFecha(fecha: Date): void {
    this.fechaSeleccionada = new Date(fecha);

    /*
     * Al cambiar de fecha podrías posteriormente
     * consultar a la API los horarios disponibles
     * para ese día.
     */

    this.horaSeleccionada = null;
  }

  // =====================================================
  // SELECCIONAR HORA
  // =====================================================

  seleccionarHora(hora: string): void {
    this.horaSeleccionada = hora;
  }

  // =====================================================
  // COMPARAR FECHAS
  // =====================================================

  esFechaSeleccionada(fecha: Date): boolean {
    if (!this.fechaSeleccionada) {
      return false;
    }

    return (
      fecha.getFullYear() === this.fechaSeleccionada.getFullYear() &&
      fecha.getMonth() === this.fechaSeleccionada.getMonth() &&
      fecha.getDate() === this.fechaSeleccionada.getDate()
    );
  }

  // =====================================================
  // NOMBRE DEL MES
  // =====================================================

  get nombreMesActual(): string {
    return this.mesActual.toLocaleDateString('es-CO', {
      month: 'long',
      year: 'numeric',
    });
  }

  // =====================================================
  // FECHA FORMATEADA
  // =====================================================

  get fechaFormateada(): string {
    if (!this.fechaSeleccionada) {
      return 'No seleccionada';
    }

    return this.fechaSeleccionada.toLocaleDateString('es-CO', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  protected confirmarCita() {

  }
}
