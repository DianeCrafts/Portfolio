import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.model';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProjectsApiService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiBaseUrl}/projects`;
  getAllProjects(lang: string = 'en'): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}?lang=${lang}`);
  }
}