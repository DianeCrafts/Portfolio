import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Education } from '../../core/models/education.model';
import { EducationApiService } from '../../core/services/api/education-api.service';
import { AppLanguage, LanguageService } from '../../core/services/language.service';
import { UI_TEXT } from '../../core/i18n/ui-text';
import { Timeline, TimelineItem } from '../../shared/timeline/timeline';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule, Timeline],
  templateUrl: './education-section.html',
  styleUrl: './education-section.css'
})
export class EducationSection implements OnInit {
  private educationApiService = inject(EducationApiService);
  private languageService = inject(LanguageService);

  educationItems: TimelineItem[] = [];
  isLoading = true;
  errorMessage = '';
  currentLanguage: AppLanguage = 'en';
  text = UI_TEXT;

  ngOnInit(): void {
    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadEducation();
    });
  }

  loadEducation(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.educationApiService.getAllEducation(this.currentLanguage).subscribe({
      next: (data) => {
        this.educationItems = data.map((item: Education) => ({
          title: item.degree,
          subtitle: item.school,
          period: this.formatPeriod(item.period.start, item.period.end),
          description: item.description,
          tags: item.courses
        }));

        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = this.text[this.currentLanguage].education.error;
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