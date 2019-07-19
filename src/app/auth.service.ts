import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLoggedIn;
  student = [
    {"name": "Rahul1", "age": "27"},
    {"name": "Rahul2", "age": "27"},
    {"name": "Rahul3", "age": "27"}
  ];

  constructor() { 
    this.isUserLoggedIn = false;
  }
  
  emailList(){
    return[
      {"email": "abc@gmail.com", "password": "123"},
      {"email": "abs@gmail.com", "password": "123"},
      {"email": "zxc@gmail.com", "password": "123"},
      {"email": "asd@gmail.com", "password": "123"}
    ];
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
  setUserLoggedIn(f){
    this.isUserLoggedIn = f;
  }
  pushStudentData(s){
    this.student.push(s);
  }
  removeStudent(i){
    this.student.splice(i,1);
    console.log(this.student);
  }
}
