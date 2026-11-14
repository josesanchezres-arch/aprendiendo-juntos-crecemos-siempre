import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Courses } from '../../components/courses/courses';
import { About } from '../../components/about/about';
import { Contact } from '../../components/contact/contact';
import { Footer } from '../../components/footer/footer';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    Hero,
    Courses,
    About,
    Contact,
    Footer


  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}