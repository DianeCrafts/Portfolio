import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Interest } from '../../models/interest.model';

@Injectable({
  providedIn: 'root'
})
export class InterestsApiService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/interests';

  getAllInterests(lang: string = 'en'): Observable<Interest[]> {
    return this.http.get<Interest[]>(`${this.apiUrl}?lang=${lang}`);
  }
}