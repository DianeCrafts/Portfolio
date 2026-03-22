import { AfterViewInit, Component, OnDestroy } from '@angular/core';

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
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'portfolio-frontend';
  activeSection = 'home';

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('section[id]');

    this.observer = new IntersectionObserver(
      (entries) => {
        let visibleSection: string | null = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            visibleSection = entry.target.id;
          }
        });

        if (visibleSection) {
          this.activeSection = visibleSection;
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    sections.forEach((section) => this.observer?.observe(section));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}