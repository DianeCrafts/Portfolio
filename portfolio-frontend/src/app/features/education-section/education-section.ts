import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Education } from '../../core/models/education.model';
import { EducationApiService } from '../../core/services/api/education-api.service';
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

  educationItems: TimelineItem[] = [];
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.educationApiService.getAllEducation('en').subscribe({
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
      error: (error) => {
        console.error('Failed to load education:', error);
        this.errorMessage = 'Failed to load education.';
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