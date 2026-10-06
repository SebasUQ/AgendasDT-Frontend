import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar-component/navbar-component';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NavbarComponent, RouterLink],
  selector: 'app-login-component',
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
  standalone: true,
})
export class LoginComponent {}
