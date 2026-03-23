import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../../models/experience.model';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ExperiencesApiService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiBaseUrl}/experiences`;
  getAllExperiences(lang: string = 'en'): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.apiUrl}?lang=${lang}`);
  }
}