import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usernameSubject = new BehaviorSubject<string>('');
  username$ = this.usernameSubject.asObservable();

  isAuth: boolean = false;
  username: string = '';
  password: string = '';

  constructor(private router: Router, private cookieService: CookieService) { 
    const usernameCookie = this.cookieService.get('username');
    const passwordCookie = this.cookieService.get('password');
    if(usernameCookie&&passwordCookie)
       this.isAuth = true;
    this.usernameSubject.next(usernameCookie);
    this.password = passwordCookie;
    this.router.navigate(['/home']);
  }


  login(username: string, password: string) {
    this.isAuth = true;
    this.usernameSubject.next(username);
    this.password = password;

    this.cookieService.set('username', username);
    this.cookieService.set('password', password);

    this.router.navigate(['/home']);
  }
}
