import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { ProjectsApiService } from '../../core/services/api/projects-api.service';
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

  projectItems: TimelineItem[] = [];
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.projectsApiService.getAllProjects('en').subscribe({
      next: (data) => {
        this.projectItems = data.map((project: Project) => ({
          title: project.title,
          description: project.description,
          tags: project.technologies,
          linkLabel: 'View on GitHub',
          linkUrl: project.githubUrl
        }));

        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to load projects:', error);
        this.errorMessage = 'Failed to load projects.';
        this.isLoading = false;
      }
    });
  }
}