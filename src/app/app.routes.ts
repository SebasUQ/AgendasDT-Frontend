import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page-component/home-page-component";
import { LoginComponent } from './features/auth/login-component/login-component';
import { RegisterComponent } from './features/auth/register-component/register-component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'authentication/login',
    component: LoginComponent
  },
  {
    path: 'authentication/register',
    component: RegisterComponent
  }
];
