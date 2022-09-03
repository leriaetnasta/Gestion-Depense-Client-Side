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
  public saveClient(client : Client):Observable<Client>{
    return this.http.post<Client>(environment.backendHost+"/clients" , client);
  }
  public deleteClient(id : number){
    return this.http.delete(environment.backendHost+"/clients/" + id);
  }
  /*public getClient(clientId:number, page: number, size : number){
    return this.http.get(environment.backendHost +"/clients/"+clientId+"?page="+page+"&size="+size);
  }*/
}
