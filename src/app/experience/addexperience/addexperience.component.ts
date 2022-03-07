import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {Router} from "@angular/router";
import {Experience} from "../../experience";
import {ExperienceService} from "../../experience.service";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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
  experienceform: FormGroup;
  ngOnInit(): void {
    this.experienceform=new FormGroup({
      "exp_org": new FormControl("", Validators.required),
      "exp_role": new FormControl("", Validators.required),
      "exp_desc": new FormControl("", Validators.required),
      "exp_start_date": new FormControl("", Validators.required),
      "exp_end_date": new FormControl("", Validators.required)
    });

  }

  addexperienceformsubmit() {
    this._service.addExperienceToRemote(this.experienceform.value).subscribe(
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
