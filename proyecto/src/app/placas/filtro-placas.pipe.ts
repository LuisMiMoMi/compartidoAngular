import { Pipe, PipeTransform } from '@angular/core';
import { Placa } from './placa';

@Pipe({
  name: 'filtroPlacas'
})
export class FiltroPlacasPipe implements PipeTransform {

  transform(placas: Placa[], criterio: string): Placa[] {
    criterio = criterio ? criterio.toLocaleLowerCase() : null;
    placas = criterio ? placas.filter(placa => placa.city.toLocaleLowerCase().includes(criterio)) : placas;
    return placas;
  }
}
