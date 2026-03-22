import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { About } from '../../core/models/about.model';
import { AboutApiService } from '../../core/services/api/about-api.service';
import { AppLanguage, LanguageService } from '../../core/services/language.service';
import { UI_TEXT } from '../../core/i18n/ui-text';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
})
export class AboutSection implements OnInit {
  private aboutApiService = inject(AboutApiService);
  private languageService = inject(LanguageService);

  about: About | null = null;
  isLoading = true;
  errorMessage = '';
  currentLanguage: AppLanguage = 'en';
  text = UI_TEXT;

  ngOnInit(): void {
    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadAbout();
    });
  }

  loadAbout(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.aboutApiService.getAbout(this.currentLanguage).subscribe({
      next: (data) => {
        this.about = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = this.text[this.currentLanguage].contact.error;
        this.isLoading = false;
      }
    });
  }
}