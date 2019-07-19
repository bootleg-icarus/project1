import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { __asyncValues } from 'tslib';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor(private _authservice: AuthService) { }

  ngOnInit() {
    console.log(this.lstudent);
  }
  displayedColumns = ['name','age','edit'];

  lstudent=this._authservice.student;

  deleteStudent(i){
    this._authservice.removeStudent(i);
    console.log(i);
  }
}
