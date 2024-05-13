import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog8386';
  constructor(private _dialog:MatDialog){}
  openAddEditempForm(){
    this._dialog.open(EmpAddEditComponent)
    console.log(this._dialog)
  }
}
