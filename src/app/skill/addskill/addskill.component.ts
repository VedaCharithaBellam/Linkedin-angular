import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {Router} from "@angular/router";
import {Skill} from "../../skill";
import {SkillService} from "../../skill.service";

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {

  // @ts-ignore
  skill = new Skill();
  user: User;
  constructor(private _service: SkillService , private _router:Router) { }
  ngOnInit( ){
  }

  addskillformsubmit() {
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
