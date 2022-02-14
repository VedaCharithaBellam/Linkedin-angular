import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Experience} from "../../experience";
import {ExperienceService} from "../../experience.service";

@Component({
  selector: 'app-editexperience',
  templateUrl: './editexperience.component.html',
  styleUrls: ['./editexperience.component.css']
})
export class EditexperienceComponent implements OnInit {

  // @ts-ignore
  experience = new Experience();
  constructor(private _service: ExperienceService , private _router:Router, private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let exp_id =parseInt(this._activateRoute.snapshot.paramMap.get('exp_id'));
    this._service.fetchExperienceByidFromRemote(exp_id).subscribe(
      data=>{
        console.log("data received");
        this.experience=data;
      },
      error=> console.log(error)
    )
  }

  updateexperienceformsubmit() {
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
