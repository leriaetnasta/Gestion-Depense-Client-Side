import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientService} from "../services/client.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients$: Observable<any> | undefined;
    errorObj: Object | undefined;
    errorMsg: String | undefined;
  constructor(private clientService : ClientService ) { }

  ngOnInit(): void { // methode s'excute au demarrage; au moment de chargement de component
    this.clientService.getClients().subscribe(
        {next: data => {
            this.clients$ = data;
          } ,
          error : err=> {

            console.error(err);

          }}
    )

  }

}
