import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})
export class AppComponent {

  fullView = false;

  constructor(
    private authService: AuthService
  ) {
    setTimeout(() => {
      this.fullView = true;
    }, 4000);
  }

  signInWithEmail() {
    this.authService.signInWithEmail();
  }
}
