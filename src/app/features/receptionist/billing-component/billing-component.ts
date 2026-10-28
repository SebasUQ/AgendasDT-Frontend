import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [FormsModule, CurrencyPipe],
  selector: 'app-billing-component',
  styleUrl: './billing-component.css',
  templateUrl: './billing-component.html',
})
export class BillingComponent {
  protected textoBusqueda: string = '';
  protected filtroEstado: string = '';
  protected facturasFiltradas: any[] = [];
  protected facturaSeleccionada: any;
  protected metodoPago: string = "";
  protected metodosPago: any[] = [];
  protected errorPago: string = "";
  protected registrandoPago: boolean = false;

  protected cambiarFiltro(estado: string) {}

  protected abrirDetalle(factura: any) {

  }

  protected cerrarDetalle() {

  }

  protected confirmarPago() {

  }
}
