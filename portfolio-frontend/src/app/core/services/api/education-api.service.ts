import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../../models/education.model';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EducationApiService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiBaseUrl}/education`;
  getAllEducation(lang: string = 'en'): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.apiUrl}?lang=${lang}`);
  }
}