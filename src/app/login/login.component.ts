import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth = [];
  email : string = "abc@gmail.com";
  password : string = '123';

  constructor(private router:Router ,private _authService : AuthService) { }

  ngOnInit() {
    this.auth = this._authService.emailList();    
  }
  loginValid(){
    if(this.email == this.auth[0].email && this.password == this.auth[0].password){
      localStorage.setItem('email', this.email);
      this._authService.setUserLoggedIn(true);
      this.router.navigate(['home']);
    }
  }
}
