import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  usuario = '';
  contrasena = '';
  perfil: 'estudiante' | 'docente' = 'estudiante';
  mensaje = '';

  ingresar(): void {
    this.mensaje = 'La pantalla de acceso está lista. El siguiente paso será conectar la validación segura de usuarios y contraseñas con el servidor.';
  }
}