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
       this._router.navigate(['/header'])
     },
        error  => {
          console.log("exception occured");
          this.msg = "Bad credentials, please enter valid email and password";
        }
    )
  }

  goToRegistration() {
    this._router.navigate(['/register'])
  }
}
