import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  AddClientFormGroup !: FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.AddClientFormGroup= this.fb.group({
      nom : this.fb.control(null)

    }
    )
  }

  handleSaveClient() {

  }
}
