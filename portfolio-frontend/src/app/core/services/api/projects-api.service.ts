import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsApiService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/projects';

  getAllProjects(lang: string = 'en'): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}?lang=${lang}`);
  }
}