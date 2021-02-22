import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Placa } from '../placa';
import { PlacasService } from '../placas.service';

@Component({
  selector: 'app-placas-edit',
  templateUrl: './placas-edit.component.html'
})
export class PlacasEditComponent implements OnInit {

  placa: Placa;
  @ViewChild('formPlaca', {static:true}) placaForm: NgForm;

  constructor(private activatedRoute: ActivatedRoute, private placasService: PlacasService) { }

  ngOnInit(): void {
    this.placa = this.activatedRoute.snapshot.data['placa'];
  }

  edit(){
    this.placasService.modPlaca(this.placaForm.value).subscribe(placa => this.placa = placa);
    return false;
  }
}
