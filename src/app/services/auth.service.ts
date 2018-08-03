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

  signInWithEmail(email:string, password: string) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this._firebaseAuth.auth.signOut();
  }
}
