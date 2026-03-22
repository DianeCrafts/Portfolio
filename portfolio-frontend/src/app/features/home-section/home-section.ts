import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Interest } from '../../core/models/interest.model';
import { InterestsApiService } from '../../core/services/api/interests-api.service';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section.html',
  styleUrl: './home-section.css',
})
export class HomeSection implements OnInit {
  private interestsApiService = inject(InterestsApiService);

  interests: Interest[] = [];
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.interestsApiService.getAllInterests('en').subscribe({
      next: (data) => {
        console.log('Interests from backend:', data);
        this.interests = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to load interests:', error);
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