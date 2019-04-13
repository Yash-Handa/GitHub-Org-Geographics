import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  provider: any;

  constructor(private afAuth: AngularFireAuth) {
    this.provider = new auth.GithubAuthProvider();
    this.provider.addScope('read:repo');
    this.provider.addScope('read:org');
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
      } else {
        // No user is signed in.
        localStorage.removeItem('token');
      }
    });
  }

  login() {
    this.afAuth.auth
      .signInWithPopup(this.provider)
      .then(result => {
        console.log(result.credential, result.user);
        // tslint:disable-next-line:no-string-literal
        localStorage.setItem('token', result.credential['accessToken']);
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.error(errorCode, errorMessage, email, credential);
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.afAuth.auth.signOut();
  }

  showProvider() {
    return this.provider;
  }

  showUser() {
    return this.afAuth.user;
  }

  showToken() {
    return localStorage.getItem('token');
  }
}
