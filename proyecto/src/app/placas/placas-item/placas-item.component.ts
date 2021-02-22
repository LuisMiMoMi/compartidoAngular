import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Placa } from '../placa';

@Component({
  selector: 'app-placas-item',
  templateUrl: './placas-item.component.html'
})
export class PlacasItemComponent implements OnInit {
  
  @Input() placa: Placa;

  @Output() newAnuncioEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  anuncio() {
    this.newAnuncioEvent.emit();
  }
}
