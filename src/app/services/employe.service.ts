import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Employe} from "../model/employe.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http:HttpClient) { }

  public searchOneEmployeID(empId:number): Observable<Employe>{
    return this.http.get<Employe>(environment.backendHost+"/employes/"+empId);
  }
}
