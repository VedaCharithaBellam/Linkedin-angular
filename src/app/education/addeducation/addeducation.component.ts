import { Component, OnInit } from '@angular/core';
import {Experience} from "../../experience";
import {User} from "../../user";
import {ExperienceService} from "../../experience.service";
import {Router} from "@angular/router";
import {Education} from "../../education";
import {EducationService} from "../../education.service";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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
  educationform: FormGroup;
  start_date: any;
  ngOnInit(): void {
    this.educationform=new FormGroup({
      "edu_org": new FormControl("", Validators.required),
      "edu_stream": new FormControl("", Validators.required),
      "edu_start_date": new FormControl("", Validators.required),
      "edu_end_date": new FormControl("", Validators.required)

    });

  }

  addeducationformsubmit() {
    this._service.addEducationToRemote(this.educationform.value).subscribe(
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
