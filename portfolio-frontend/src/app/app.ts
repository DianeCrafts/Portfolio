import { Component } from '@angular/core';

import { Navbar } from './shared/navbar/navbar';
import { HomeSection } from './features/home-section/home-section';
import { ExperienceSection } from './features/experience-section/experience-section';
import { ProjectsSection } from './features/projects-section/projects-section';
import { EducationSection } from './features/education-section/education-section';
import { AboutSection } from './features/about-section/about-section';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    HomeSection,
    ExperienceSection,
    ProjectsSection,
    EducationSection,
    AboutSection
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'portfolio-frontend';
}