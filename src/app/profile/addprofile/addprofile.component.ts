import { Component, OnInit } from '@angular/core';
import {Education} from "../../education";
import {User} from "../../user";
import {EducationService} from "../../education.service";
import {Router} from "@angular/router";
import {Profile} from "../../profile";
import {ProfileService} from "../../profile.service";

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent implements OnInit {

  // @ts-ignore
  profile = new Profile();
  user: User;
  constructor(private _service: ProfileService , private _router:Router) { }
  ngOnInit( ){
  }

  addprofileformsubmit() {
    this._service.addProfileToRemote(this.profile).subscribe(
      data=>{
        console.log("data added succesfully");
        this._router.navigate(['/profile']);
      },
      error=>console.log(error)
    )
  }

  gotolist() {
    this._router.navigate(['/profile']);
  }


}
