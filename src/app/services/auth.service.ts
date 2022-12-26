import { Injectable } from '@angular/core';
import { Auth, UserCredential, authState, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentuser$ = authState(this.auth);

  constructor(private auth: Auth) { }

  login(userName: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.auth, userName, password));
  }

  signUp(userName: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, userName, password));
  }

  signOut(): Observable<void> {
    return from(this.auth.signOut());
  }

}
