import { Component, Input, OnInit } from '@angular/core';
import { SignService } from 'src/app/usuario/sign.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  constructor(private sign: SignService) { }

  @Input() loged = false;

  ngOnInit(): void {
  }
  
  logout(): void {
    this.sign.logOut();
    this.loged = false;
  }

}
