import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { ProjectsApiService } from '../../core/services/api/projects-api.service';
import { AppLanguage, LanguageService } from '../../core/services/language.service';
import { UI_TEXT } from '../../core/i18n/ui-text';
import { Timeline, TimelineItem } from '../../shared/timeline/timeline';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, Timeline],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css'
})
export class ProjectsSection implements OnInit {
  private projectsApiService = inject(ProjectsApiService);
  private languageService = inject(LanguageService);

  projectItems: TimelineItem[] = [];
  isLoading = true;
  errorMessage = '';
  currentLanguage: AppLanguage = 'en';
  text = UI_TEXT;

  ngOnInit(): void {
    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadProjects();
    });
  }

  loadProjects(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.projectsApiService.getAllProjects(this.currentLanguage).subscribe({
      next: (data) => {
        this.projectItems = data.map((project: Project) => ({
          title: project.title,
          description: project.description,
          tags: project.technologies,
          linkLabel: this.text[this.currentLanguage].projects.github,
          linkUrl: project.githubUrl
        }));

        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = this.text[this.currentLanguage].projects.error;
        this.isLoading = false;
      }
    });
  }
}