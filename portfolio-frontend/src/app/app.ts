import { Component, HostListener, OnInit, inject } from '@angular/core';

import { Navbar } from './shared/navbar/navbar';
import { HomeSection } from './features/home-section/home-section';
import { ExperienceSection } from './features/experience-section/experience-section';
import { ProjectsSection } from './features/projects-section/projects-section';
import { EducationSection } from './features/education-section/education-section';
import { AboutSection } from './features/about-section/about-section';
import { AppLanguage, LanguageService } from './core/services/language.service';
import { AppTheme, ThemeService } from './core/services/theme.service';

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
export class AppComponent implements OnInit {
  activeSection = 'home';
  currentLanguage: AppLanguage = 'en';
  currentTheme: AppTheme = 'light';

  private languageService = inject(LanguageService);
  private themeService = inject(ThemeService);

  ngOnInit(): void {
    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
    });

    this.themeService.theme$.subscribe((theme) => {
      this.currentTheme = theme;
    });

    this.themeService.initTheme();
  }

  onSectionChange(sectionId: string): void {
    this.activeSection = sectionId;
  }

  onLanguageToggle(): void {
    this.languageService.toggleLanguage();
  }

  onThemeToggle(): void {
    this.themeService.toggleTheme();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const sections = ['home', 'experience', 'projects', 'education', 'about'];
    const navbarOffset = 120;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);

      if (!element) continue;

      const top = element.offsetTop - navbarOffset;
      const bottom = top + element.offsetHeight;

      if (window.scrollY >= top && window.scrollY < bottom) {
        this.activeSection = sectionId;
        break;
      }
    }
  }
}