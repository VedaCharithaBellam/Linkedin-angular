import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SkillService} from "../skill.service";
import {Skill} from "../skill";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  _skilllist: Skill[];
  constructor(private _service:SkillService, private  _router : Router) {
  }

  ngOnInit(): void {
    this._service.fetchSkillListFromRemote().subscribe(
      data=>{console.log("response recieved"),
        console.log(data),
        this._skilllist=data;},

      error=>console.log("exception occured")
    )
  }

  goToAddSkill(){
    this._router.navigate(['/addskill']);
  }

  goToEditSkill(skill_id:number) {

    this._router.navigate(['/editskill/',skill_id]);
  }

  deleteSkill(skill_id: number) {
    this._service.deleteSkillByidFromRemote(skill_id).subscribe(
      data=> {console.debug("deleted succesfully");
        this._router.navigate(['/profile']);
      },
      error=> console.log(error)
    )
    window.location.reload()
  }

}
