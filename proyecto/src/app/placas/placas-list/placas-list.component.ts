import { Component, OnInit } from '@angular/core';
import { Placa } from '../placa';

@Component({
  selector: 'app-placas-list',
  templateUrl: './placas-list.component.html',
})
export class PlacasListComponent implements OnInit {

  placas: Placa[] = [
    {id: "Placa1", power: 400},
    {id: "Placa2", power: 401},
    {id: "Placa3", power: 402},
    {id: "Placa4", power: 403}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
