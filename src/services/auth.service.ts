import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usernameSubject = new BehaviorSubject<string>(''); // יצירת ערוץ תקשורת
  username$ = this.usernameSubject.asObservable(); // חשיפת הערוץ לשימוש חיצוני

  constructor(private router: Router) { }

  isAuth: boolean = false;
  username: string = '';
  password: string = '';

  login(username: string, password: string) {
    this.isAuth = true;
    this.usernameSubject.next(username); // עדכון הערוץ
    this.password = password;
    console.log(username + ' ' + password);
    this.router.navigate(['/home']);
  }
}
