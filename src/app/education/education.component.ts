import { Component, OnInit } from '@angular/core';
import {Experience} from "../experience";
import {ExperienceService} from "../experience.service";
import {Router} from "@angular/router";
import {Education} from "../education";
import {EducationService} from "../education.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {


  _educationlist: Education[];
  constructor(private _service:EducationService, private  _router : Router) {
  }

  ngOnInit(): void {
    this._service.fetchEducationListFromRemote().subscribe(
      data=>{console.log("response recieved"),
        console.log(data),
        this._educationlist=data;},

      error=>console.log("exception occured")
    )
  }

  goToAddEducation(){
    this._router.navigate(['/addeducation']);
  }

  goToEditEducation(edu_id:number) {

    this._router.navigate(['/editeducation',edu_id]);

  }

  deleteEducation(edu_id: number) {
    this._service.deleteEducationByidFromRemote(edu_id).subscribe(
      data=> {console.debug("deleted succesfully");
        this._router.navigate(['/experience']);
      },
      error=> console.log(error)
    )
    window.location.reload()
  }


}
