import { Component, OnInit } from '@angular/core';
import {Experience} from "../../experience";
import {User} from "../../user";
import {ExperienceService} from "../../experience.service";
import {Router} from "@angular/router";
import {Education} from "../../education";
import {EducationService} from "../../education.service";

@Component({
  selector: 'app-addeducation',
  templateUrl: './addeducation.component.html',
  styleUrls: ['./addeducation.component.css']
})
export class AddeducationComponent implements OnInit {

  // @ts-ignore
  education = new Education();
  user: User;
  constructor(private _service: EducationService , private _router:Router) { }
  ngOnInit( ){
  }

  addeducationformsubmit() {
    this._service.addEducationToRemote(this.education).subscribe(
      data=>{
        console.log("data added succesfully");
        this._router.navigate(['/education']);
      },
      error=>console.log(error)
    )
  }

  gotolist() {
    this._router.navigate(['/education']);
  }



}
