import { Component, OnInit } from '@angular/core';
import { Placa } from '../placa';
import { PlacasService } from '../placas.service';

@Component({
  selector: 'app-placas-list',
  templateUrl: './placas-list.component.html',
})
export class PlacasListComponent implements OnInit {

  placas: Placa[];
  criterio: string = "";
  colorin: boolean;
  constructor(private placasService: PlacasService) { }

  ngOnInit(): void {
    this.placasService.getPlacas().subscribe(
      placas => this.placas = placas
    );
    this.colorin = false;
  }
  
  cambiaColor(){
    this.colorin = true;
    setTimeout(() => {
      this.colorin = false;
    }, 5000);
  }


}
