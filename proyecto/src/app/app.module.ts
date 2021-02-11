import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlacasListComponent } from './placas/placas-list/placas-list.component';
import { PlacasItemComponent } from './placas/placas-item/placas-item.component';
import { HomeComponent } from './components/home/home.component';
import { PlacasService } from './placas/placas.service';
import {HttpClientModule} from '@angular/common/http';
import { PlacasDetailComponent } from './placas/placas-detail/placas-detail.component';
import { ToKWPipe } from './placas/to-kw.pipe';
import { FiltroPlacasPipe } from './placas/filtro-placas.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MostrarPropietarioDirective } from './directivas/mostrar-propietario.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlacasListComponent,
    PlacasItemComponent,
    HomeComponent,
    PlacasDetailComponent,
    ToKWPipe,
    FiltroPlacasPipe,
    LoginComponent,
    MostrarPropietarioDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PlacasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
