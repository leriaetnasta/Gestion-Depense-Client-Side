import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../model/clients.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http:HttpClient) { }

  public getClients(): Observable<Array<Client>>{
    return this.http.get<Array<Client>>(environment.backendHost +"/clients")
  }
  public searchClient(keyword : string):Observable<Array<Client>>{
    return this.http.get<Array<Client>>(environment.backendHost+"/clients/search?keyword="+keyword);
  }
}
