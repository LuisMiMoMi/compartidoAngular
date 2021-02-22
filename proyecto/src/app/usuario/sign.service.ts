import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(private http: HttpClient, private router: Router) {
    this.logedInfo = new BehaviorSubject<boolean>(false);
  }

  userURL = '/assets/usuarios.json';

  signUser(user: Usuario, recuerdame): Observable<Usuario> {
    return this.http.get<Usuario>(this.userURL).pipe(
      map(us => {
        //if (user && us.user == user.user && us.passwd == user.passwd) {
          localStorage.setItem('token', us.token);
          if (recuerdame) {
            localStorage.setItem('user', us.user);
          } else {
            localStorage.removeItem('user');
          }
          this.router.navigate(["/placas"]);
          return us;
        /*} else {
          this.router.navigate(["/login"]);
          return user;
        }*/
      })
    );
  }

  isSigned(): boolean {
    if (localStorage.getItem("token")) {
      this.logedInfo.next(true);
      return true;
    } else {
      this.logedInfo.next(false);
      return false;
    }
  }

  private logedInfo: BehaviorSubject<boolean>;
  isLoged(): Observable<boolean> {
    return this.logedInfo.asObservable();
  }

  logOut(): void {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      this.logedInfo.next(false);
      this.router.navigate(["/login"]);
    }
  }
}
