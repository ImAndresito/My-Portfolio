import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './route-animations';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    IntroductionComponent,
    HeaderComponent,
    ButtonsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
