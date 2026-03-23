import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Interest } from '../../models/interest.model';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InterestsApiService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiBaseUrl}/interests`;
  getAllInterests(lang: string = 'en'): Observable<Interest[]> {
    return this.http.get<Interest[]>(`${this.apiUrl}?lang=${lang}`);
  }
}