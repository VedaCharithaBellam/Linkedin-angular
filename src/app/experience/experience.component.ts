import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Experience} from "../experience";
import {ExperienceService} from "../experience.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  _experiencelist: Experience[];
  constructor(private _service:ExperienceService, private  _router : Router) {
  }

  ngOnInit(): void {
    this._service.fetchExperienceListFromRemote().subscribe(
      data=>{console.log("response recieved"),
        console.log(data),
        this._experiencelist=data;},

      error=>console.log("exception occured")
    )
  }

  goToAddExperience(){
    this._router.navigate(['/addexperience']);
  }

  goToEditExperience(exp_id:number) {

    this._router.navigate(['/editexperience/',exp_id]);
  }

  deleteExperience(exp_id: number) {
    this._service.deleteExperienceByidFromRemote(exp_id).subscribe(
      data=> {console.debug("deleted succesfully");
        this._router.navigate(['/experience']);
      },
      error=> console.log(error)
    )
    window.location.reload()
  }

}
