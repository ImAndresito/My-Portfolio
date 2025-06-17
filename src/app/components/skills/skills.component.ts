import { Component } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';

@Component({
  selector: 'app-skills',
  imports: [ButtonsComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = [
    { name: 'Figma' },
    { name: 'Photoshop' },
    { name: 'Illustrator' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'Typescript' },
    { name: 'Angular' },
  ];
}
