import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {CertificationService} from "../../certification.service";
import {Certification} from "../../certification";
import {User} from "../../user";

@Component({
  selector: 'app-addcertification',
  templateUrl: './addcertification.component.html',
  styleUrls: ['./addcertification.component.css']
})
export class AddCertificationComponent implements OnInit {

  // @ts-ignore
  certification = new Certification();
  user: User;
  constructor(private _service: CertificationService , private _router:Router) { }
  ngOnInit( ){
  }

  addcertificationformsubmit() {
    this._service.addCertificationToRemote(this.certification).subscribe(
      data=>{
        console.log("data added succesfully");
        this._router.navigate(['/certifications']);
      },
      error=>console.log(error)
    )
  }

  gotolist() {
    this._router.navigate(['/certifications']);
  }
}
