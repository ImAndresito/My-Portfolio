import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {}
