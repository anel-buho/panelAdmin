import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import SessionComponent from './pages/session/session.component';


@Component({
  selector: 'app-login',
  standalone: true,  imports: [
    RouterModule,
    SessionComponent
],
  templateUrl: './login.component.html',
  styles: `
    :host {
      display: block;
    }
  `
})
export default class LoginComponent { }
