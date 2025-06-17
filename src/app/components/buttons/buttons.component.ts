import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttons',
  imports: [TranslatePipe, CommonModule, RouterModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent implements OnInit {
  currentRoute: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.currentRoute = '';
  }

  ngOnInit() {
    this.activatedRoute.url.subscribe((urlSegments) => {
      this.currentRoute = urlSegments.join('/') || '/';
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
