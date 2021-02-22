import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Placa } from '../placa';

@Component({
  selector: 'app-placas-nuevas',
  templateUrl: './placas-nuevas.component.html'
})
export class PlacasNuevasComponent implements OnInit {
  
  placa: Placa;
  formPlaca: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  get idValid(){
    return this.formPlaca.get('id');
  }

  get clienteValid(){
    return this.formPlaca.get('cliente');
  }

  get powerValid(){
    return this.formPlaca.get('power');
  }

  get propietarioValid(){
    return this.formPlaca.get('propietario');
  }

  get cityValid(){
    return this.formPlaca.get('city');
  }

  ngOnInit(): void {
    this.crearFormulario();
  }
  
  crearFormulario(){
    this.formPlaca = this.formBuilder.group({
      id: ["", [Validators.required, Validators.minLength(5)]],
      city: ["", Validators.required],
      power: ["0", Validators.min(100)],
      production: this.formBuilder.array([this.getProductionControl()]),
      cliente: ["", Validators.required],
      propietario: ["", Validators.required]
    });
  }

  getProductionControl(): FormControl {
    const control = this.formBuilder.control(110);
    control.setValidators(Validators.min(100));
    return control;
  }

  get productionArray(): FormArray{
    return <FormArray>this.formPlaca.get('production');
  }

  addProduction() {
    (<FormArray>this.formPlaca.get('production')).push(this.getProductionControl());
  }

  delProduction(i:number) {
    (<FormArray>this.formPlaca.get('production')).removeAt(i);
  }

  maxChargeValidator(maxInputCharge: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any} | null => {
      if (control.value) {
        let inputCharge = control.value;
        return maxInputCharge >= inputCharge ? null : {'maxCharge': maxInputCharge}; 
      }
      return null;
    }
  }
}
