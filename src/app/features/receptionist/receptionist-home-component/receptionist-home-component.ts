import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-receptionist-home-component',
  styleUrl: './receptionist-home-component.css',
  templateUrl: './receptionist-home-component.html',
})
export class ReceptionistHomeComponent {
  citasHoy: Meeting[] = [];

  pacientesRecibidos: number = 0;

  pacientesPorRecibir: number = 0;


  protected registrarLlegada(cita: Meeting) {

  }
}
