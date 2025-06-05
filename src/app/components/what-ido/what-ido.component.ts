import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-what-ido',
  imports: [TranslatePipe],
  templateUrl: './what-ido.component.html',
  styleUrl: './what-ido.component.css',
})
export class WhatIDoComponent {
  constructor(private languageService: LanguageService) {}

  text(key: string): string {
    return this.languageService.getTranslation(key);
  }
}
