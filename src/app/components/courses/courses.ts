import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-courses', // cambia el selector según el componente
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink
  ],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {

}
