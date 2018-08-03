import { SharedService } from './services/shared.service';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {

  fullView = true;

  constructor(
    // private authService: AuthService
    private sharedService: SharedService
  ) {
    // setTimeout(() => {
    //   this.fullView = true;
    // }, 4000);
  }

  ngOnInit() {
    this.sharedService.view.subscribe(
      (res: boolean) => {
        this.fullView = res;
      }
    );
  }

}
