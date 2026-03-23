import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../../models/about.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutApiService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiBaseUrl}/about`;

  getAbout(lang: string = 'en'): Observable<About> {
    return this.http.get<About>(`${this.apiUrl}?lang=${lang}`);
  }
}