import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  name: string;
  age: number;

  constructor(private _authservice: AuthService) { }

  ngOnInit() {
  }

  addnew(name,age){
    
    this._authservice.pushStudentData({name,age});
    this.name='';
    this.age= null;
  }
}
