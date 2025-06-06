import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage: string = 'en';
  private translations: any = {};

  constructor(private http: HttpClient) {
    this.loadLanguage(this.currentLanguage);
  }

  loadLanguage(language: string) {
    this.http.get(`assets/i18n/${language}.json`).subscribe((data) => {
      this.translations = data;
    });
    this.currentLanguage = language;
  }

  getTranslation(key: string): string {
    return this.translations[key] || key;
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }
}
