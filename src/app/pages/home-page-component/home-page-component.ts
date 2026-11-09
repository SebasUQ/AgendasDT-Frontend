import { Component } from '@angular/core';
import {NavbarComponent} from '../../shared/components/navbar-component/navbar-component';
import { AcercaDeComponent} from './acerca-de-component/acerca-de-component';

@Component({
  imports: [NavbarComponent],
  selector: 'app-home-page-component',
  styleUrl: './home-page-component.css',
  templateUrl: './home-page-component.html',
  standalone: true,
})
export class HomePageComponent {}
