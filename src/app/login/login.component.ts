import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
// import SessionComponent from "./pages/session/session.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    // SessionComponent.
    MatSlideToggleModule
],
  templateUrl: './login.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent { }
