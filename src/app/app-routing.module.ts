import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepensesComponent } from './depenses/depenses.component';
import {EmployesComponent} from "./employes/employes.component";
import {DeplacementsComponent} from "./deplacements/deplacements.component";
import {ProjetsComponent} from "./projets/projets.component";
import {ClientsComponent} from "./clients/clients.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path : 'depenses', component : DepensesComponent},
  {path : 'employes', component : EmployesComponent},
  {path : 'deplacements', component : DeplacementsComponent},
  {path : 'projets', component : ProjetsComponent},
  {path : 'clients', component : ClientsComponent},
  {path : 'login', component : LoginComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
