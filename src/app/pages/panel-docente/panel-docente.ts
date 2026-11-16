import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panel-docente',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './panel-docente.html',
  styleUrl: './panel-docente.css'
})
export class PanelDocente {
  herramientas = [
    { icono: '📚', titulo: 'Gestionar cursos', descripcion: 'Organiza los contenidos y recursos de tus cursos.' },
    { icono: '📝', titulo: 'Actividades y evaluaciones', descripcion: 'Prepara ejercicios y evaluaciones para tus estudiantes.' },
    { icono: '📊', titulo: 'Seguimiento académico', descripcion: 'Consulta el avance y los resultados de aprendizaje.' },
    { icono: '👩‍🎓', titulo: 'Mis estudiantes', descripcion: 'Administra tus grupos y acompaña su aprendizaje.' }
  ];
}