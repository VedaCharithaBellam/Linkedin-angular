import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {RegistrationService} from "../registration.service";
import {User} from "../user";
import {Route, Router} from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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

  loginform: FormGroup;
  ngOnInit(): void {
    this.loginform=new FormGroup({
      "email": new FormControl("", [Validators.required, Validators.email]),
      "password": new FormControl("", [
        Validators.required,
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
        Validators.minLength(8),
      ],),
    });

  }
  onGoToSignUpPage(){
    alert("Alert Message");
  }

  loginUser(){
    this._service.loginUserFromRemote(this.loginform.value).subscribe(
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
