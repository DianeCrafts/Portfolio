import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesApiService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/experiences';

  getAllExperiences(lang: string = 'en'): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.apiUrl}?lang=${lang}`);
  }
}