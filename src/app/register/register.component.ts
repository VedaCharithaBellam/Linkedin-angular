import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../user";
import {RegistrationService} from "../registration.service";
import {Router} from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ts-ignore
  user = new User();
  msg: boolean = false;
  alert: boolean=false;
  constructor( private _service : RegistrationService, private  _router : Router ) { }
  registerform: FormGroup;
  ngOnInit(): void {
    this.registerform=new FormGroup({
      "email": new FormControl("", [Validators.required, Validators.email]),
      "username": new FormControl("", Validators.required),
      "password": new FormControl("", [
        Validators.required,
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
        Validators.minLength(8),
      ],),
    });

  }

  registerUser() {

    this._service.registerUserFromRemote(this.registerform.value).subscribe(
      data =>{
        console.log("response received");
        // this._router.navigate(['/login'])
        this.msg=true

      },
      error  => {
        //console.log(error);
        this.alert = true;
      }
    )

  }
}
