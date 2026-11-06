import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-confirm-dialog-component',
  styleUrl: './confirm-dialog-component.css',
  templateUrl: './confirm-dialog-component.html',
  standalone: true
})
export class ConfirmDialogComponent {
  @Input() visible: boolean = false;

  @Input() titulo: string = 'Confirmación';

  @Input() mensaje: string = '¿Deseas continuar con esta acción?';

  @Input() textoBotonCancelar: string = 'Cancelar';

  @Input() textoBotonConfirmar: string = 'Confirmar';

  @Output() confirmado = new EventEmitter<void>();

  @Output() cancelado = new EventEmitter<void>();

  confirmar(): void {
    this.confirmado.emit();
  }

  cancelar(): void {
    this.cancelado.emit();
  }
}
