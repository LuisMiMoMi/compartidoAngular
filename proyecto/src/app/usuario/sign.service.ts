import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(private http: HttpClient, private router: Router) { }

  userURL = '/assets/usuarios.json';

  signUser(user: Usuario, recuerdame): Observable<Usuario> {
    return this.http.get<Usuario>(this.userURL).pipe(
      map(us => {
        us["passwd"] = user.passwd;
        localStorage.setItem('token', us.token);
        if (recuerdame) {
          localStorage.setItem('user', us.user);
          //this.header.loged = true;
        } else {
          localStorage.removeItem('user');
        }
        this.router.navigate(["/placas"]);
        return us;
      })
    );
  }

  isSigned(): boolean{
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }

  logOut(): void {
    if (localStorage.getItem("token")) {
      this.router.navigate(["/login"]);
      localStorage.removeItem("token");
    }
  }
}
