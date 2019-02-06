import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
const BASE_URL="http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { 
  }

logError(err)
  {
    console.log(err);
    return false;
  }  
  
getUserDetails(username, password) {
  // post details to APi server return user info
  this.http.post(BASE_URL+"users/login", {
    "email":username,
    "password":password
  })
  .subscribe(
      (data) => {
        console.log(data["token"]);
        window.localStorage.setItem("token",data["token"]);
        window.localStorage.setItem("login","true");
        // Handle response here
      },
      err => { window.localStorage.setItem("login","false");}
  );
  // .subscribe(data) => {
  //   console.log(data["token"]);
  //   window.localStorage.setItem("token",data["token"]);
  //   return true;
  // },
  // (error =>{
  //   return false;
  // });
}
getUserLogin()
{
    return this.http.get(BASE_URL+"users/me",{
      headers: new HttpHeaders().set('x-auth',window.localStorage.getItem("token")),
    }).subscribe(data => {
      console.log(data);
      if("email" in data)
        return true;
      return false;
      });
}

}
