import { Routes } from '@angular/router';
import { WhatIDoComponent } from './components/what-ido/what-ido.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    component: WhatIDoComponent,
    title: 'Andres - Portfolio',
    data: { title: 'whatIDo' },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { title: 'projects' },
  },
];
