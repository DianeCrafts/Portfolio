import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { About } from '../../core/models/about.model';
import { AboutApiService } from '../../core/services/api/about-api.service';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
})
export class AboutSection implements OnInit {
  private aboutApiService = inject(AboutApiService);

  about: About | null = null;
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.aboutApiService.getAbout('en').subscribe({
      next: (data) => {
        this.about = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to load contact data:', error);
        this.errorMessage = 'Failed to load contact information.';
        this.isLoading = false;
      }
    });
  }
}