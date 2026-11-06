import { Component, inject, signal } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar-component/navbar-component';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";

export const passwordsIguales: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const password = group.get('password')?.value;
  const confirmar = group.get('confirmPassword')?.value;
  return password === confirmar ? null : { passwordsNoCoinciden: true };
};

@Component({
  imports: [NavbarComponent, ReactiveFormsModule],
  selector: 'app-register-component',
  styleUrl: './register-component.css',
  templateUrl: './register-component.html',
  standalone: true,
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  cargando = signal(false);
  error = signal<string | null>(null);

  form = this.fb.nonNullable.group(
    {
      documento: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      telefono: ['', Validators.maxLength(10)],
      password: ['', Validators.required, Validators.minLength(6)],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: passwordsIguales,
    },
  );

  enviar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // muestra los errores de validación
      return;
    }

    const { confirmPassword, ...datos } = this.form.getRawValue();

    this.cargando.set(true);
    this.error.set(null);

    this.auth.register(datos).subscribe({
      next: (res) => {
        this.cargando.set(false);
        this.router.navigate([this.auth.rutaInicial(res.rol)]);
      },
      error: (err) => {
        this.cargando.set(false);
        this.error.set(this.mensajeDeError(err));
      },
    });
  }

  private mensajeDeError(err: HttpErrorResponse): string {
    switch (err.status) {
      case 409:
          return 'El correo ingresado ya está registrado';
      case 400:
        return 'Revisa los datos ingresados';
      case 0:
        return 'No se pudo conectar con el servidor';
      default:
        return err.status >= 500
          ? 'Error del servidor, intenta más tarde'
          : 'No se pudo completar el registro';
    }
  }
}
