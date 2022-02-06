import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill.model';
@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  skills: Skill[] =[
  new Skill('HTML','advanced','https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png'),
  new Skill('CSS','advanced','data:image/png;base64,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'),
  new Skill('JS','advanced','data:image/png;base64,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'),];
  constructor() { }

  ngOnInit(): void {
  }

}