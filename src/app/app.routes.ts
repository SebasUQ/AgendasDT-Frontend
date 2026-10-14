import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page-component/home-page-component";
import { LoginComponent } from './features/auth/login-component/login-component';
import { RegisterComponent } from './features/auth/register-component/register-component';
import { PatientPageComponent } from './pages/patient-page-component/patient-page-component';
import { PatientHomeComponent } from './features/patient/patient-home-component/patient-home-component';
import { AppointmentComponent } from './features/patient/appointment-component/appointment-component';
import { ClinicalHistoryComponent } from './features/patient/clinical-history-component/clinical-history-component';
import { DentistPageComponent } from './pages/dentist-page-component/dentist-page-component';
import { DentistHomeComponent } from './features/dentist/dentist-home-component/dentist-home-component';
import { CalendarComponent } from './features/dentist/calendar-component/calendar-component';
import { ConsultationComponent } from './features/dentist/consultation-component/consultation-component';
import { DiagnoseComponent } from './features/dentist/diagnose-component/diagnose-component';


export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'authentication/login',
    component: LoginComponent,
  },
  {
    path: 'authentication/register',
    component: RegisterComponent,
  },
  {
    path: 'patient-dashboard',
    component: PatientPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: PatientHomeComponent,
      },
      {
        path: 'agendar-cita',
        component: AppointmentComponent,
      },
      {
        path: 'historial-clinico',
        component: ClinicalHistoryComponent
      }
    ],
  },
  {
    path: 'dentist-dashboard',
    component: DentistPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: DentistHomeComponent
      },
      {
        path: 'calendario',
        component: CalendarComponent
      },
      {
        path: 'consultar',
        component: ConsultationComponent
      },
      {
        path: 'diagnosticar',
        component: DiagnoseComponent
      }
    ]
  }
];
