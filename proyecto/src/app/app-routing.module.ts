import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlacasListComponent } from './placas/placas-list/placas-list.component';
import { PlacasDetailComponent } from './placas/placas-detail/placas-detail.component';
import { LoginComponent } from './components/login/login.component';
import { SignGuard } from './usuario/sign.guard';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'placas',canActivate: [SignGuard], component: PlacasListComponent},
    {path: 'login', component: LoginComponent},
    {path: 'placa/:id', component: PlacasDetailComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }