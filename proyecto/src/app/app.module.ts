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
import { ForCargaDirective } from './directivas/for-carga.directive';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './placas/placas-detail/line-chart/line-chart.component';
import { PlacasEditComponent } from './placas/placas-edit/placas-edit.component';
import { MaxChargeDirective } from './directivas/validaciones/max-charge.directive';
import { PlacasNuevasComponent } from './placas/placas-nuevas/placas-nuevas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    MostrarPropietarioDirective,
    ForCargaDirective,
    LineChartComponent,
    PlacasEditComponent,
    MaxChargeDirective,
    PlacasNuevasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [PlacasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
