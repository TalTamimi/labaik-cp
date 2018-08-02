import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'nsk-cp';

  constructor(
    private authService: AuthService
  ) {}

  signInWithEmail() {
    this.authService.signInWithEmail();
  }
}
