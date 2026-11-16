import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Nosotros } from './pages/nosotros/nosotros';
import { Cursos } from './pages/cursos/cursos';
import { Blog } from './pages/blog/blog';
import { Contacto } from './pages/contacto/contacto';
import { Login } from './pages/login/login';
import { PanelEstudiante } from './pages/panel-estudiante/panel-estudiante';
import { PanelDocente } from './pages/panel-docente/panel-docente';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'nosotros', component: Nosotros },
  { path: 'cursos', component: Cursos },
  { path: 'blog', component: Blog },
  { path: 'contacto', component: Contacto },
  { path: 'login', component: Login },
  { path: 'panel/estudiante', component: PanelEstudiante },
  { path: 'panel/docente', component: PanelDocente },
  { path: '**', redirectTo: '' }
];