import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar-component/navbar-component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [NavbarComponent, NgOptimizedImage],
  selector: 'app-acerca-de-component',
  styleUrl: './acerca-de-component.css',
  templateUrl: './acerca-de-component.html',
  standalone: true,
})
export class AcercaDeComponent {}
