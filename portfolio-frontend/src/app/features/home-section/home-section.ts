import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Interest } from '../../core/models/interest.model';
import { InterestsApiService } from '../../core/services/api/interests-api.service';
import { AppLanguage, LanguageService } from '../../core/services/language.service';
import { UI_TEXT } from '../../core/i18n/ui-text';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section.html',
  styleUrl: './home-section.css',
})
export class HomeSection implements OnInit {
  private interestsApiService = inject(InterestsApiService);
  private languageService = inject(LanguageService);

  interests: Interest[] = [];
  isLoading = true;
  errorMessage = '';
  currentLanguage: AppLanguage = 'en';
  text = UI_TEXT;

  ngOnInit(): void {
    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadInterests();
    });
  }

  loadInterests(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.interestsApiService.getAllInterests(this.currentLanguage).subscribe({
      next: (data) => {
        this.interests = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load interests.';
        this.isLoading = false;
      }
    });
  }

  getInterestBoxClass(index: number): string {
    const animationClasses = [
      'interest-box-1',
      'interest-box-2',
      'interest-box-3'
    ];

    return animationClasses[index % animationClasses.length];
  }
}