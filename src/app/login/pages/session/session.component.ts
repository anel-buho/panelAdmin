import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [CommonModule,
            FormsModule,
            MatFormFieldModule,
            MatButtonModule,
            MatInputModule, MatIconModule],
  templateUrl: './session.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionComponent {
  errorMessage = signal('');
  hide = signal(true);

  // readonly form = new FormGroup({
  //   tel: new FormControl(null),
  // });
  readonly emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor() {
    merge(this.emailFormControl.statusChanges, this.emailFormControl.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.emailFormControl.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.emailFormControl.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
