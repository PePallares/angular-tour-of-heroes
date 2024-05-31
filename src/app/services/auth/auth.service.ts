import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  constructor(private auth: Auth) {
    this.loggedIn.next(false);
  }

  ngOnInit() {
    this.loggedIn.next(false);
  }

  async register({ email, password }: {email: string; password: string}) {
    try {
      const user = await createUserWithEmailAndPassword(this.auth, email, password);
      this.loggedIn.next(true);
      return user;
    } catch (e) {
      return null;
    }
  }

  async login({ email, password }: {email: string; password: string}) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      this.loggedIn.next(true);
      return user;
    } catch (e) {
      return null;
    }
  }

  logout() {
    this.loggedIn.next(false);
    return signOut(this.auth);
  }
}