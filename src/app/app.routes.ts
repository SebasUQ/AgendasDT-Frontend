import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page-component/home-page-component";
import { LoginComponent } from './features/auth/login-component/login-component';
import { RegisterComponent } from './features/auth/register-component/register-component';
import { PatientPageComponent } from './pages/patient-page-component/patient-page-component';
import { PatientHomeComponent } from './features/patient/patient-home-component/patient-home-component';
import { AppointmentComponent } from './shared/components/appointment-component/appointment-component';
import { ClinicalHistoryComponent } from './features/patient/clinical-history-component/clinical-history-component';
import { DentistPageComponent } from './pages/dentist-page-component/dentist-page-component';
import { DentistHomeComponent } from './features/dentist/dentist-home-component/dentist-home-component';
import { CalendarComponent } from './features/dentist/calendar-component/calendar-component';
import { ConsultationComponent } from './features/dentist/consultation-component/consultation-component';
import { DiagnoseComponent } from './features/dentist/diagnose-component/diagnose-component';
import { ReceptionistPageComponent } from './pages/receptionist-page-component/receptionist-page-component';
import {
  ReceptionistHomeComponent
} from './features/receptionist/receptionist-home-component/receptionist-home-component';
import { BillingComponent } from './features/receptionist/billing-component/billing-component';
import {
  ReceptionistAppointmentComponent
} from './features/receptionist/receptionist-appointment-component/receptionist-appointment-component';
import { roleGuard } from './core/guards/role.guard';
import { authGuard } from './core/guards/auth.guard';


export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
  },
  {
    path: 'patient-dashboard',
    component: PatientPageComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['Paciente'] },
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
        component: ClinicalHistoryComponent,
      },
    ],
  },
  {
    path: 'dentist-dashboard',
    component: DentistPageComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['Odontologo'] },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: DentistHomeComponent,
      },
      {
        path: 'calendario',
        component: CalendarComponent,
      },
      {
        path: 'consultar',
        component: ConsultationComponent,
      },
      {
        path: 'diagnosticar',
        component: DiagnoseComponent,
      },
    ],
  },
  {
    path: 'receptionist-dashboard',
    component: ReceptionistPageComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['Recepcionista'] },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: ReceptionistHomeComponent,
      },
      {
        path: 'agendar-cita',
        component: ReceptionistAppointmentComponent,
      },
      {
        path: 'facturación',
        component: BillingComponent,
      },
    ],
  },
];
