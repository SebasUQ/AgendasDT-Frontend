import { Component } from '@angular/core';
import { HistoryCardComponent } from './history-card-component/history-card-component';
import { HistoryDetailsComponent } from './history-details-component/history-details-component';

@Component({
  imports: [HistoryCardComponent, HistoryDetailsComponent],
  selector: 'app-clinical-history-component',
  styleUrl: './clinical-history-component.css',
  templateUrl: './clinical-history-component.html',
})
export class ClinicalHistoryComponent {
  clinicalHistory: clinicalHistory[] = [
    {
      patientId: 1,

      historyId: 1,

      fecha: '10 de septiembre de 2026',

      diagnostico: 'Caries dental localizada en molar superior.',

      tratamiento: 'Restauración dental.',

      observaciones:
        'Se realizó valoración odontológica y se recomienda mantener controles periódicos.',

    },
  ];

  mostrarDetalle = false;

  historialSeleccionado: any = null;

  abrirDetalle(historial: any): void {
    this.historialSeleccionado = historial;

    this.mostrarDetalle = true;
  }

  cerrarDetalle(): void {
    this.mostrarDetalle = false;

    this.historialSeleccionado = null;
  }
}
