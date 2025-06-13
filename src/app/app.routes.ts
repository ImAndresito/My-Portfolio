import { Routes } from '@angular/router';
import { WhatIDoComponent } from './components/what-ido/what-ido.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    component: WhatIDoComponent,
    title: '',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projects',
  },
];
