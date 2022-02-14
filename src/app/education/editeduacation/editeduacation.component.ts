import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EducationService} from "../../education.service";
import {Education} from "../../education";

@Component({
  selector: 'app-editeduacation',
  templateUrl: './editeduacation.component.html',
  styleUrls: ['./editeduacation.component.css']
})
export class EditeduacationComponent implements OnInit {

  // @ts-ignore
  education = new Education();
  constructor(private _service: EducationService , private _router:Router, private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let edu_id =parseInt(this._activateRoute.snapshot.paramMap.get('edu_id'));
    this._service.fetchEducationByidFromRemote(edu_id).subscribe(
      data=>{
        console.log("data received");
        this.education=data;
      },
      error=> console.log(error)
    )
  }

  updateeducationformsubmit() {
    this._service.addEducationToRemote(this.education).subscribe(
      data=>{
        console.log("data added succesfully");
        this._router.navigate(['/education']);
      },
      error=>console.log(error)
    )
  }

  gotolist() {
    this._router.navigate(['/education']);
  }
}
