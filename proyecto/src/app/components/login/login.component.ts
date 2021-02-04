import { Component, OnInit } from '@angular/core';
import { SignService } from 'src/app/usuario/sign.service';
import { Usuario } from 'src/app/usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {user: "", passwd: ""};
  recuerdame = false;

  constructor(private sign: SignService) { }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.usuario.user = localStorage.getItem('user');
      this.recuerdame = true;
    }
  }

  login($event){
    this.sign.signUser(this.usuario, this.recuerdame).subscribe(
      user => {
        this.usuario = user
      },
      error => console.log(error)
    );
  }
}
