import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Placa } from './placa';
import {map,filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacasService {

  constructor(private http: HttpClient) { }

  placasURL = 'assets/placas.json';

  getPlacas(): Observable<Placa[]>{   // retorna un observable al que cal subscriure's
    return this.http.get<{placas: Placa[]}>(this.placasURL).pipe( // get retorna un observable i pipe accepta funcions de manipulació de les dades
      map(response => response.placas) // de la resposta traguem l'array que ens interessa
    );
  }

  getPlaca(id:string): Observable<Placa>{   // retorna un observable al que cal subscriure's
    return this.http.get<{placas: Placa[]}>(this.placasURL).pipe( // get retorna un observable i pipe accepta funcions de manipulació de les dades
      map(response => response.placas.filter(p => p.id === id)[0]) // de la resposta traguem l'array que ens interessa
    );
  }

  modPlaca(placa: Placa): Observable<Placa>{
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(placa);
    return this.http.put<Placa>('http://localhost:3000/placas/'+placa.id, body, {'headers': headers});
  }


}
