import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {RegistrationService} from "../registration.service";
import {User} from "../user";
import {Route, Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // @ts-ignore
  user = new User();
  msg='';
  constructor( private _service : RegistrationService, private  _router : Router ) { }

  ngOnInit(): void {
  }
  onGoToSignUpPage(){
    alert("Alert Message");
  }
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
     data =>{
       console.log("response received"),
         this._service.user=data,
         console.log(this._service.user),
         localStorage.setItem('userData', JSON.stringify(this._service.user)),
       this._router.navigate(['/profile'])
     },
        error  => {
          console.log(error);
          this.msg = "Bad credentials, please enter valid email and password";
        }
    )
  }

  //
  // userData = JSON.parse(localStorage.getItem('userData')) as User;
  //
  goToRegistration() {
    this._router.navigate(['/register'])
  }
}
