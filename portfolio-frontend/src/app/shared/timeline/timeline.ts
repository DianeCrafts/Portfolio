import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RevealOnScrollDirective } from '../directives/reveal-on-scroll.directive';

export interface TimelineItem {
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
  tags?: string[];
  linkLabel?: string;
  linkUrl?: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css'
})
export class Timeline {
  @Input() sectionTitle = '';
  @Input() items: TimelineItem[] = [];
}