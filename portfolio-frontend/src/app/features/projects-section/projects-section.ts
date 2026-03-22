import { Component } from '@angular/core';
import { Timeline, TimelineItem } from '../../shared/timeline/timeline';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [Timeline],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css'
})
export class ProjectsSection {
  projectItems: TimelineItem[] = [
    {
      title: 'Portfolio Website',
      subtitle: 'Personal Project',
      period: '2026',
      description: 'Built a personal portfolio using Angular and Node.js with multilingual support.',
      tags: ['Angular', 'Node.js', 'Express']
    },
    {
      title: 'Task Manager API',
      subtitle: 'Backend Project',
      period: '2025',
      description: 'Developed a REST API for managing tasks, with clean architecture and caching.',
      tags: ['Node.js', 'Express', 'JSON']
    },
    {
      title: 'Cloud Demo App',
      subtitle: 'Learning Project',
      period: '2025',
      description: 'Created a demo app to explore cloud deployment and backend service organization.',
      tags: ['AWS', 'Docker', 'TypeScript']
    }
  ];
}