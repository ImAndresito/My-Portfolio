import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-introduction',
  imports: [TranslatePipe],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
})
export class IntroductionComponent {
  dropdownOpen = false;

  languages = [
    { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'it', label: 'Italian', flag: 'https://flagcdn.com/w40/it.png' },
    { code: 'es', label: 'Spanish', flag: 'https://flagcdn.com/w40/es.png' },
  ];

  constructor(private languageService: LanguageService) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectLanguage(language: any) {
    this.languageService.loadLanguage(language.code);
    this.dropdownOpen = false;
  }

  text(key: string): string {
    return this.languageService.getTranslation(key);
  }
}
