import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-about', // cambia el selector según el componente
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}