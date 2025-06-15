import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  template: `
    <p
      style="
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    color: #a089ce;
    margin-top: 40px;
  "
    >
      {{ currentTitle | translate }}
    </p>
  `,
  styles: '',
})
export class HeaderComponent implements OnInit {
  currentTitle: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.router.routerState.snapshot.root.firstChild;
        if (currentRoute?.data['title']) {
          this.currentTitle = currentRoute.data['title'];
        }
      });
  }
}
