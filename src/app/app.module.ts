import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DepensesComponent } from './depenses/depenses.component';
import { MotifsComponent } from './motifs/motifs.component';
import { DeplacementsComponent } from './deplacements/deplacements.component';
import { ProjetsComponent } from './projets/projets.component';
import { ClientsComponent } from './clients/clients.component';
import { EmployesComponent } from './employes/employes.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DepensesComponent,
    MotifsComponent,
    DeplacementsComponent,
    ProjetsComponent,
    ClientsComponent,
    EmployesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
