
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LocaleService {
  private languageSource = new BehaviorSubject<string>('en_US'); // Default language
  currentLanguage = this.languageSource.asObservable();
  private mockMapData: any;
  changeLanguage(language: string) {
    this.languageSource.next(language);
  }
  constructor() { this.mockMapData = {
    localeShorted: {
      en: 'en_US',
      de: 'de_DE',
      ru: 'ru_RU'
    }
  };}
  getLocaleMap(): Observable<any> {
    return of(this.mockMapData);
  }

  getBrowserLocale(): string {

    for (let index = 0; index < navigator.languages.length; index++) {
      const element = navigator.languages[index];
      if (element === 'ru-RU' || element === 'ru') {
        return 'ru-RU';
      }
    }
    return navigator.language || (navigator.languages && navigator.languages[0]) || 'en-US';
  }
}