import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EmployeService} from "../services/employe.service";
import {Observable} from "rxjs";
import {Employe} from "../model/employe.model";

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {
  employeFormGroup!:FormGroup;
  currentPage:number=0;
  size:number=5;
  employeObservable$!:Observable<Employe>;
  constructor(private fb:FormBuilder, private employeService:EmployeService) { }

  ngOnInit(): void {
    this.employeFormGroup=this.fb.group(
        {
          employeId: this.fb.control('')
        }
    )
  }

  handleSearchEmploye() {
    let empId:number=this.employeFormGroup.value.employeId;
    this.employeObservable$=this.employeService.searchEmploye(empId,this.currentPage,this.size);

  }
}
