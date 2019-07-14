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
  email : string = "email@abc.com";
  password : string = '';

  constructor(private router:Router ,private _authService : AuthService) { }

  ngOnInit() {
    this.auth = this._authService.emailList();
    console.log(this.auth);
    
  }
  loginValid(){
    if(this.email == this.auth[0].email && this.password == this.auth[0].password){
      this._authService.setUserLoggedIn();
      this.router.navigate(['home']);
      localStorage.setItem('email', this.email);
    }
  }
}
