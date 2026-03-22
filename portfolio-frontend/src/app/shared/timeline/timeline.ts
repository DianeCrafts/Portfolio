import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface TimelineItem {
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
  tags?: string[];
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css'
})
export class Timeline {
  @Input() sectionTitle = '';
  @Input() items: TimelineItem[] = [];
}