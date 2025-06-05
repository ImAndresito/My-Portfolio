import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-what-ido',
  imports: [TranslatePipe],
  templateUrl: './what-ido.component.html',
  styleUrl: './what-ido.component.css',
})
export class WhatIDoComponent {}
