import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl ='http://localhost:5050/users/'

  constructor(private http:HttpClient) { }



  set_register(register_data:any){
    return this.http.post(`${this.baseUrl}register`,register_data)
  }


  set_login(login_data:any){
    return this.http.post(`${this.baseUrl}login`,login_data)
  }

  

}






