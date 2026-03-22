import { Component } from '@angular/core';
import { Timeline, TimelineItem } from '../../shared/timeline/timeline';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [Timeline],
  templateUrl: './education-section.html',
  styleUrl: './education-section.css'
})
export class EducationSection {
  educationItems: TimelineItem[] = [
    {
      title: 'Bachelor of Computer Science',
      subtitle: 'University Name',
      period: '2020 - 2024',
      description: 'Focused on software development, data structures, algorithms, and backend systems.',
      tags: ['Java', 'Algorithms', 'Databases']
    },
    {
      title: 'Relevant Coursework',
      subtitle: 'Academic Work',
      period: 'During Degree',
      description: 'Studied web development, operating systems, networking, and software engineering.',
      tags: ['Web Dev', 'OS', 'Networking']
    }
  ];
}