import { Component, OnInit, Input } from '@angular/core';
import { Placa } from '../placa';

@Component({
  selector: 'app-placas-item',
  templateUrl: './placas-item.component.html'
})
export class PlacasItemComponent implements OnInit {
  
  @Input() placa: Placa;

  constructor() { }

  ngOnInit(): void {
  }

}
