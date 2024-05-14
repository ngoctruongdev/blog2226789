import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'blog8386';
  constructor(private _dialog:MatDialog,private _emService: EmployeeService){}

  ngOnInit(): void {
    this.getEmployeeList();
  }
  openAddEditempForm(){
    this._dialog.open(EmpAddEditComponent)
  }
  getEmployeeList(){
    this._emService.getEmployeeList().subscribe({
      next:(res)=>{

        console.log(res)
      },
      error:console.log,
      
    })
  }
}
