import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SkillService} from "../../skill.service";
import {Skill} from "../../skill";

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {

  // @ts-ignore
  skill = new Skill();
  constructor(private _service: SkillService , private _router:Router, private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let skill_id =parseInt(this._activateRoute.snapshot.paramMap.get('skill_id'));
    this._service.fetchSkillByidFromRemote(skill_id).subscribe(
      data=>{
        console.log("data received");
        this.skill=data;
      },
    error=> console.log(error)
    )
  }

  updateskillformsubmit() {
    this._service.addSkillToRemote(this.skill).subscribe(
      data=>{
        console.log("data added succesfully");
        this._router.navigate(['/skill']);
      },
      error=>console.log(error)
    )
  }

  gotolist() {
    this._router.navigate(['/skill']);
  }

}
