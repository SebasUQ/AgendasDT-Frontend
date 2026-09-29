import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar-component/navbar-component';

@Component({
  imports: [NavbarComponent],
  selector: 'app-login-component',
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
  standalone: true,
})
export class LoginComponent {}
