import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientService} from "../services/client.service";
import {catchError, Observable, throwError} from "rxjs";
import { Client } from '../model/clients.model';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients$!: Observable<Array<Client>>;
    errorObj: Object | undefined;
    errorMsg: String | undefined;
    searchFormGroup!: FormGroup;
  constructor(private clientService : ClientService, private fb:FormBuilder) { }

  ngOnInit(): void { // methode s'excute au demarrage; au moment de chargement de component
    this.searchFormGroup= this.fb.group({
      keyword : this.fb.control("")
    }
    )
    this.clients$=this.clientService.getClients().pipe(
        catchError(erreur=> {
          this.errorMsg=erreur.message;
          return throwError(erreur);
        }

    ))

  }

  handleSearch() {
    let k= this.searchFormGroup?.value.keyword; // ? si la valeur est differente de undefined
    this.clients$=this.clientService.searchClient(k).pipe(
        catchError(erreur=> {
              this.errorMsg=erreur.message;
              return throwError(erreur);
            }

        ))
  }
}
