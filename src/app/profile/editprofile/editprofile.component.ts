import { Component, OnInit } from '@angular/core';
import {Experience} from "../../experience";
import {ExperienceService} from "../../experience.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Profile} from "../../profile";
import {ProfileService} from "../../profile.service";

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  // @ts-ignore
  profile = new Profile();
  constructor(private _service: ProfileService , private _router:Router, private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let exp_id =parseInt(this._activateRoute.snapshot.paramMap.get('id'));
    this._service.fetchProfileByidFromRemote(exp_id).subscribe(
      data=>{
        console.log("data received");
        this.profile=data;
      },
      error=> console.log(error)
    )
  }

  updateprofileformsubmit() {
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
