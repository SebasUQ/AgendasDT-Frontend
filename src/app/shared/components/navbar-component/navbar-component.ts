import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  selector: 'app-navbar-component',
  styleUrl: './navbar-component.css',
  templateUrl: './navbar-component.html',
  standalone: true,
})
export class NavbarComponent {}
