import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AppLanguage = 'en' | 'fr';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<AppLanguage>('en');
  language$ = this.languageSubject.asObservable();

  get currentLanguage(): AppLanguage {
    return this.languageSubject.value;
  }

  setLanguage(language: AppLanguage): void {
    this.languageSubject.next(language);
  }

  toggleLanguage(): void {
    const nextLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
    this.languageSubject.next(nextLanguage);
  }
}