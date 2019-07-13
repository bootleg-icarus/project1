import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  emailList(){
    return[
      {"email": "abc@gmail.com", "password": "123"},
      {"email": "abs@gmail.com", "password": "123"},
      {"email": "zxc@gmail.com", "password": "123"},
      {"email": "asd@gmail.com", "password": "123"}
    ];
  }
}
