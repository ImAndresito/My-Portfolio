import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ButtonsComponent } from '../buttons/buttons.component';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe, ButtonsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {}
