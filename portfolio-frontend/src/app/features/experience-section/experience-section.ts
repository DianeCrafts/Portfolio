import { Component } from '@angular/core';
import { Timeline, TimelineItem } from '../../shared/timeline/timeline';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [Timeline],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.css'
})
export class ExperienceSection {
  experienceItems: TimelineItem[] = [
    {
      title: 'Backend Developer',
      subtitle: 'Example Company',
      period: '2023 - 2024',
      description: 'Built APIs and internal tools for business workflows and backend services.',
      tags: ['Node.js', 'Express', 'MongoDB', 'AWS']
    },
    {
      title: 'Full Stack Developer',
      subtitle: 'Another Company',
      period: '2022 - 2022',
      description: 'Worked on frontend and backend features and collaborated on product improvements.',
      tags: ['Angular', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'Junior Developer',
      subtitle: 'Starter Company',
      period: '2021 - 2022',
      description: 'Contributed to internal dashboards and learned production development practices.',
      tags: ['JavaScript', 'HTML', 'CSS']
    }
  ];
}