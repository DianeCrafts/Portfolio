import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Experience } from '../../core/models/experience.model';
import { ExperiencesApiService } from '../../core/services/api/experiences-api.service';
import { AppLanguage, LanguageService } from '../../core/services/language.service';
import { UI_TEXT } from '../../core/i18n/ui-text';
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
  private languageService = inject(LanguageService);

  experienceItems: TimelineItem[] = [];
  isLoading = true;
  errorMessage = '';
  currentLanguage: AppLanguage = 'en';
  text = UI_TEXT;

  ngOnInit(): void {
    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadExperiences();
    });
  }

  loadExperiences(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.experiencesApiService.getAllExperiences(this.currentLanguage).subscribe({
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
      error: () => {
        this.errorMessage = this.text[this.currentLanguage].experience.error;
        this.isLoading = false;
      }
    });
  }

  private formatPeriod(start: string, end: string): string {
    return `${this.formatMonthYear(start)} - ${this.formatMonthYear(end)}`;
  }

  private formatMonthYear(value: string): string {
    const [year, month] = value.split('-');
    const monthNames =
      this.currentLanguage === 'fr'
        ? ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc']
        : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return `${monthNames[Number(month) - 1]} ${year}`;
  }
}