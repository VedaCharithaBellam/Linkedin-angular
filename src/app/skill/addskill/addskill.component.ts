import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {Router} from "@angular/router";
import {Skill} from "../../skill";
import {SkillService} from "../../skill.service";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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
  skillform: FormGroup;
  ngOnInit(): void {
    this.skillform=new FormGroup({
      "skill_name": new FormControl("", Validators.required),
      "skill_level": new FormControl("", Validators.required,)
    });

  }
  addskillformsubmit() {
    this._service.addSkillToRemote(this.skillform.value).subscribe(
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
