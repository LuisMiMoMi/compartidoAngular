import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlacasListComponent } from './placas/placas-list/placas-list.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'placas', component: PlacasListComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }