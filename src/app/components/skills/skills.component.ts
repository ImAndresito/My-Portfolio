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
    { name: 'Figma', icon: 'figma.svg' },
    { name: 'Photoshop', icon: 'photoshop.svg' },
    { name: 'Illustrator', icon: 'illustrator.svg' },
    { name: 'HTML', icon: 'html.svg' },
    { name: 'CSS', icon: 'css.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'Typescript', icon: 'typescript.svg' },
    { name: 'Angular', icon: 'angular.svg' },
  ];
}
