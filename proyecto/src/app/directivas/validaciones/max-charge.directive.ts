import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMaxCharge]',
  providers: [{provide: NG_VALIDATORS, useExisting: MaxChargeDirective, multi: true}]
})
export class MaxChargeDirective implements Validator{

  @Input("appMaxCharge") maxCharge;

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    if (this.maxCharge && control.value) {
      if (parseInt(this.maxCharge) < parseInt(control.value)) {
        return {maxCharge: true}
      }
    }
    return null;
  }

}
