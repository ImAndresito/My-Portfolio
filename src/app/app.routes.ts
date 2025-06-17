import { Routes } from '@angular/router';
import { WhatIDoComponent } from './components/what-ido/what-ido.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

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
    data: { title: 'myProjects', animation: 'My Projects' },
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { title: 'mySkills', animation: 'Skills' },
  },
];
