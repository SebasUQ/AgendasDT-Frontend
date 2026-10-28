import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../shared/components/sidebar-component/sidebar-component';
import { UserNavbarComponent } from '../../shared/components/user-navbar-component/user-navbar-component';
import { MenuItem } from '../../core/interface/menu.item.interface';

@Component({
  imports: [RouterOutlet, SidebarComponent, UserNavbarComponent],
  selector: 'app-receptionist-page-component',
  styleUrl: './receptionist-page-component.css',
  templateUrl: './receptionist-page-component.html',
})
export class ReceptionistPageComponent {

  userRole: string = "Recepcionista";

  menuItems: MenuItem[] = [
    {
      label: 'Agendar cita',
      icon: 'calendar_month',
      route: 'agendar-cita',
    },
    {
      label: 'Facturación',
      icon: 'medical_services',
      route: 'facturación',
    }
  ];
}
