import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.css'
})
export class EmpAddEditComponent {
  empForm: FormGroup;

  education:string[] = [
      'Matric',
      'Diploma',
      'Intermediate',
      'Gradute',
  ]
  constructor(private __fb:FormBuilder,private _empService:EmployeeService){
    this.empForm = this.__fb.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      experience:'',
      package:'',
    })
  }
  onFormSubmit(){
    if(this.empForm.valid){
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val:any) =>{
          
        }
      })
    }
  }
}
