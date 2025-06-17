import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttons',
  imports: [TranslatePipe, CommonModule, RouterModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent implements OnInit {
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = '';
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url || '/';
    });
  }

  getButtonText() {
    return this.currentRoute.includes('skills') ? 'myProjects' : 'mySkills';
  }

  getLink() {
    return this.currentRoute.includes('skills') ? '/projects' : '/skills';
  }

  getButtonShadowClass() {
    return this.currentRoute.includes('skills') ? 'purple' : 'yellow';
  }
}
