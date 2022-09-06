import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EmployeService} from "../services/employe.service";
import {catchError, Observable, throwError} from "rxjs";
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
    errorMessage!: string;

    constructor(private fb:FormBuilder, private employeService:EmployeService) { }

  ngOnInit(): void {
    this.employeFormGroup=this.fb.group(
        {
          employeId: this.fb.control('')
        }
    )
  }

  handleSearchEmploye() {
    let empId:number=this.employeFormGroup?.value.employeId;
    this.employeObservable$=this.employeService.searchOneEmployeID(empId).pipe(
        catchError(err => {
          this.errorMessage=err.message;
          return throwError(err);
        })
    );
  }
}
