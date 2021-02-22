import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Placa } from './placa';
import { PlacasService } from './placas.service';

@Injectable({
  providedIn: 'root'
})
export class PlacasResolveService implements Resolve<Placa>{

  constructor(private placasService:PlacasService, private router: Router) {};

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Placa | Observable<Placa> | Promise<Placa> {
    return this.placasService.getPlaca(route.params.id).pipe(
      catchError(error => {
        this.router.navigate(['/placas']);
        return of(null);
      })
    )
  }

  
}
