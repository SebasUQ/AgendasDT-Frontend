import { Component } from '@angular/core';
import { AppointmentComponent } from '../../../shared/components/appointment-component/appointment-component';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [AppointmentComponent, FormsModule],
  selector: 'app-receptionist-appointment-component',
  styleUrl: './receptionist-appointment-component.css',
  templateUrl: './receptionist-appointment-component.html',
})
export class ReceptionistAppointmentComponent {
  pacienteEncontrado: any;
  documentoPaciente = '';
  buscando: boolean = false;
  errorBusqueda: any;

  protected buscarPaciente() {

  }
}
