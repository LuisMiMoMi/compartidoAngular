import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Placa } from '../placa';
import { PlacasService } from '../placas.service';

@Component({
  selector: 'app-placas-detail',
  templateUrl: './placas-detail.component.html',
})
export class PlacasDetailComponent implements OnInit {

  placa: Placa;

  constructor(private activateRoute: ActivatedRoute,
    private placasService: PlacasService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      p => {
        this.placasService.getPlaca(p.id).subscribe(
          placa => this.placa= placa
        )
      }
    )
  }

}
