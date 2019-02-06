import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router:Router;
  constructor(private Auth: AuthService ,_router:Router) {
    this.router=_router;
    // const result=this.Auth.getUserLogin();
    // console.log(result);
    // if(result)
    // {
    //   this.router.navigateByUrl("/home");
    //}
  }
  ngOnInit() {
  }
loginUser(event) {
  
  event.preventDefault();
  const target = event.target;
  const username = target.querySelector('#username').value;
  const password = target.querySelector('#password').value;
  this.Auth.getUserDetails(username, password);
  console.log(window.localStorage.getItem("login"));
  if(window.localStorage.getItem("login")=="true")
    this.router.navigateByUrl('/home');
  else 
    alert("Sorry Wrong Password")
}
}

