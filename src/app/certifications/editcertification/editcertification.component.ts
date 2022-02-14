import { Component, OnInit } from '@angular/core';
import {Certification} from "../../certification";
import {User} from "../../user";
import {CertificationService} from "../../certification.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editcertification',
  templateUrl: './editcertification.component.html',
  styleUrls: ['./editcertification.component.css']
})
export class EditcertificationComponent implements OnInit {

  // @ts-ignore
  certification = new Certification();
  constructor(private _service: CertificationService , private _router:Router, private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let certification_id =parseInt(this._activateRoute.snapshot.paramMap.get('certification_id'));
    this._service.fetchCertificationByidFromRemote(certification_id).subscribe(
      data=>{
        console.log("data received");
        this.certification=data;
      },
      error=> console.log(error)
    )
  }

  updatecertificationformsubmit() {
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
