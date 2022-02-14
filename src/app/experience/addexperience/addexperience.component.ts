import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {Router} from "@angular/router";
import {Experience} from "../../experience";
import {ExperienceService} from "../../experience.service";

@Component({
  selector: 'app-addexperience',
  templateUrl: './addexperience.component.html',
  styleUrls: ['./addexperience.component.css']
})
export class AddexperienceComponent implements OnInit {

  // @ts-ignore
  experience = new Experience();
  user: User;
  constructor(private _service: ExperienceService , private _router:Router) { }
  ngOnInit( ){
  }

  addexperienceformsubmit() {
    this._service.addExperienceToRemote(this.experience).subscribe(
      data=>{
        console.log("data added succesfully");
        this._router.navigate(['/experience']);
      },
      error=>console.log(error)
    )
  }

  gotolist() {
    this._router.navigate(['/experience']);
  }

}
