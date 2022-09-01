import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepensesComponent } from './depenses/depenses.component';
import {MotifsComponent} from "./motifs/motifs.component";
import {EmployesComponent} from "./employes/employes.component";
import {DeplacementsComponent} from "./deplacements/deplacements.component";
import {ProjetsComponent} from "./projets/projets.component";
import {ClientsComponent} from "./clients/clients.component";
import {AddClientComponent} from "./add-client/add-client.component";


const routes: Routes = [
  {path : 'depenses', component : DepensesComponent},
  {path : 'motifs' , component : MotifsComponent},
  {path : 'employes', component : EmployesComponent},
  {path : 'deplacements', component : DeplacementsComponent},
  {path : 'projets', component : ProjetsComponent},
  {path : 'clients', component : ClientsComponent},
  {path : 'addclient', component : AddClientComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
