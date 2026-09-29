import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar-component/navbar-component';

@Component({
  imports: [NavbarComponent],
  selector: 'app-register-component',
  styleUrl: './register-component.css',
  templateUrl: './register-component.html',
  standalone: true,
})
export class RegisterComponent {}
