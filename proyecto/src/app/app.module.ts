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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlacasListComponent,
    PlacasItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlacasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
