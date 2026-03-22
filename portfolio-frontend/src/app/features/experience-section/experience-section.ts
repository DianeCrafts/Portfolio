import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Experience } from '../../core/models/experience.model';
import { ExperiencesApiService } from '../../core/services/api/experiences-api.service';
import { Timeline, TimelineItem } from '../../shared/timeline/timeline';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule, Timeline],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.css'
})
export class ExperienceSection implements OnInit {
  private experiencesApiService = inject(ExperiencesApiService);

  experienceItems: TimelineItem[] = [];
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.experiencesApiService.getAllExperiences('en').subscribe({
      next: (data) => {
        this.experienceItems = data.map((experience) => ({
          title: experience.role,
          subtitle: experience.company,
          period: this.formatPeriod(experience.period.start, experience.period.end),
          description: experience.description,
          tags: experience.technologies
        }));

        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to load experiences:', error);
        this.errorMessage = 'Failed to load work experience.';
        this.isLoading = false;
      }
    });
  }

  private formatPeriod(start: string, end: string): string {
    return `${this.formatMonthYear(start)} - ${this.formatMonthYear(end)}`;
  }

  private formatMonthYear(value: string): string {
    const [year, month] = value.split('-');

    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const monthIndex = Number(month) - 1;
    return `${monthNames[monthIndex]} ${year}`;
  }
}