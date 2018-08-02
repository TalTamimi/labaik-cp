import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;
constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
      this.user = _firebaseAuth.authState;
  }

  signInWithEmail() {
    return this._firebaseAuth.auth.signInWithEmailAndPassword('admin@labaik.com', '123456');
  }

  signOut() {
    return this._firebaseAuth.auth.signOut();
  }
}
