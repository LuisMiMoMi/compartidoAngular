import { Component, Input, OnInit } from '@angular/core';
import { SignService } from 'src/app/usuario/sign.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  loged: boolean = false;

  constructor(private sign: SignService) { }

  ngOnInit(): void {
    this.loged = this.sign.isSigned();
    this.sign.isLoged().subscribe(
      l => this.loged = l
    );
  }

  /*isLoged(): boolean{
    return this.sign.isSigned();
  }*/

  logout(): void {
    this.sign.logOut();
  }

}
