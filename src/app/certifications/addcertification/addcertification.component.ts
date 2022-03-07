import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {CertificationService} from "../../certification.service";
import {Certification} from "../../certification";
import {User} from "../../user";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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
  certificationform: FormGroup;
  ngOnInit(): void {
    this.certificationform=new FormGroup({
      "certification_name": new FormControl("", Validators.required),
      "certification_desc": new FormControl("", Validators.required),
    });

  }

  addcertificationformsubmit() {
    this._service.addCertificationToRemote(this.certificationform.value).subscribe(
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
