import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panel-estudiante',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './panel-estudiante.html',
  styleUrl: './panel-estudiante.css'
})
export class PanelEstudiante {
  cursos = [
    { nombre: 'Matemáticas', detalle: 'Aprende jugando con los números', progreso: 35, icono: '🔢' },
    { nombre: 'Español', detalle: 'Descubre el mundo de las palabras', progreso: 60, icono: '📖' },
    { nombre: 'Inglés', detalle: 'Tus primeras palabras en inglés', progreso: 20, icono: '🌎' }
  ];
}