import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  template: `
    <p class="header-title">
      {{ currentTitle | translate }}
    </p>
  `,
  styles: [
    `
      .header-title {
        font-size: 32px;
        font-weight: 700;
        text-align: center;
        color: #a089ce;
        margin-top: 40px;
      }

      @media screen and (max-width: 480px) {
        .header-title {
          font-size: 24px;
          margin-top: 20px;
        }
      }
    `,
  ],
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
