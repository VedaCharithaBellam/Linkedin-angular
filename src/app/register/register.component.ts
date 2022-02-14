import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../user";
import {RegistrationService} from "../registration.service";
import {Router} from "@angular/router";

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
  ngOnInit(): void {

  }

  registerUser() {

    this._service.registerUserFromRemote(this.user).subscribe(
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
