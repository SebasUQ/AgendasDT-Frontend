import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../shared/components/sidebar-component/sidebar-component';
import { UserNavbarComponent } from '../../shared/components/user-navbar-component/user-navbar-component';
import { MenuItem } from '../../core/interface/menu.item.interface';

@Component({
  imports: [RouterOutlet, SidebarComponent, UserNavbarComponent],
  selector: 'app-dentist-page-component',
  styleUrl: './dentist-page-component.css',
  templateUrl: './dentist-page-component.html',
})
export class DentistPageComponent {

  userRole: string = "Odontólogo";

  menuItems: MenuItem[] = [
    {
      label: 'Calendario',
      icon: 'calendar_month',
      route: 'calendario',
    },
    {
      label: 'Consultas',
      icon: 'medical_services',
      route: 'consultar',
    },
    {
      label: 'Diagnosticar',
      icon: 'assignment',
      route: 'diagnosticar',
    },
  ];
}
