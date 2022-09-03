import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {Client} from "../model/clients.model";
import { ClientService } from '../services/client.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  AddClientFormGroup !: FormGroup;
  client!:Client;
  constructor(private clientservice:ClientService, private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.AddClientFormGroup= this.fb.group({
      nom : this.fb.control(null, [Validators.required,Validators.minLength(4)]),

    }
    )
  }

  handleSaveClient() {
    let client=this.AddClientFormGroup?.value;
    //stocker tt les données de formulaire dans la variable client
    this.clientservice.saveClient(client).subscribe({
      next: data=>{
        alert("Client ajouté")
        //this.AddClientFormGroup.reset();
        this.router.navigateByUrl("/clients");
      },error:err => {
        console.log(err)
      }
    })
  }
}
