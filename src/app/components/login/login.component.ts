import { SharedService } from './../../services/shared.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  user = {
    "email": "",
    "password": ""
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.sharedService.view.next(false);
  }

  signInWithEmail() {
    this.authService.signInWithEmail(this.user.email, this.user.password)
    .then((res) => {
      this.router.navigate(['dashboard']);
      this.sharedService.view.next(true);
    })
    .catch((err) => console.log(err));;
  }

}
