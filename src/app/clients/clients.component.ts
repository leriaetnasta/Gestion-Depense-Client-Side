import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any; //
  constructor(private http:HttpClient ) { }

  ngOnInit(): void { // methode s'excute au demarrage; au moment de chargement de component
    this.http.get("http://localhost:8086/clients").subscribe(data=>{
      this .clients=data
    },error=>{
      console.log(error)
    }

    ) // des que les données arrive je recupere les données typscript et les stocker dans une var
  }

}
