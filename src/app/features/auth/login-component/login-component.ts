import { Component, inject, signal } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar-component/navbar-component';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [NavbarComponent, ReactiveFormsModule],
  selector: 'app-login-component',
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
  standalone: true,
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  cargando = signal(false);
  error = signal<string | null>(null);

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  enviar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // muestra los errores de validación
      return;
    }

    this.cargando.set(true);
    this.error.set(null);

    this.auth.login(this.form.getRawValue()).subscribe({
      next: (res) => {
        this.cargando.set(false);
        this.router.navigate([this.auth.rutaInicial(res.rol)]);
      },
      error: (err) => {
        this.cargando.set(false);
        this.error.set(
          err.status === 401
            ? 'Correo o contraseña incorrectos'
            : 'No se pudo conectar con el servidor',
        );
      },
    });
  }
}
