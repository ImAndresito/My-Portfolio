import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  imports: [],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
})
export class IntroductionComponent {
  dropdownOpen = false;

  languages = [
    { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'it', label: 'Italiano', flag: 'https://flagcdn.com/w40/it.png' },
    { code: 'es', label: 'Français', flag: 'https://flagcdn.com/w40/es.png' },
  ];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectLanguage(lang: any) {
    console.log('Selected language:', lang.code);
    // TODO: switch language logic here
    this.dropdownOpen = false;
  }
}
