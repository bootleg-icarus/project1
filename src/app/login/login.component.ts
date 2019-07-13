import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth = [];
  email : string = "email@abc.com";
  password : string = '';

  constructor(private _authService : AuthService) { }

  ngOnInit() {
    this.auth = this._authService.emailList();
    console.log(this.auth);
    
  }
  loginValid(){
    if(this.auth.includes(this.email)){
      console.log("true");
    }
    else{
      console.log(this.email);
      
    }
  }
}
