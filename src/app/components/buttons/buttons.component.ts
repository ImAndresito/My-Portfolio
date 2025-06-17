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
    // Ottieni la rotta corrente
    this.activatedRoute.url.subscribe((urlSegments) => {
      this.currentRoute = urlSegments.join('/') || '/';
    });
  }

  getButtonText() {
    // Restituisce il testo in base alla rotta corrente
    return this.currentRoute.includes('skills') ? 'myProjects' : 'mySkills';
  }

  getLink() {
    // Restituisce il link per il routerLink in base alla rotta
    return this.currentRoute.includes('skills') ? '/projects' : '/skills';
  }

  getButtonShadowClass() {
    // Restituisce la classe CSS per il colore in base alla rotta
    return this.currentRoute.includes('skills') ? 'purple' : 'yellow';
  }
}
