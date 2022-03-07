import { Component, OnInit } from '@angular/core';
import {CertificationService} from "../certification.service";
import {Router} from "@angular/router";
import {Certification} from "../certification";

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  _certificationlist: Certification[];
  constructor(private _service:CertificationService, private  _router : Router) {
  }

  ngOnInit(): void {
    this.getUserDetails();
  }
  getUserDetails(){
    this._service.fetchCertificationListFromRemote().subscribe(
      data=>{console.log("response recieved"),
        console.log(data),
        this._certificationlist=data;},

      error=>console.log("exception occured")
    )
  }

  goToAddCertification(){
    this._router.navigate(['/addcertification']);
  }

  goToEditCertification(certification_id:number) {

    this._router.navigate(['/editcertification', certification_id]);
  }


  deleteCertification(certification_id: number) {
    this.getUserDetails()
    this._service.deleteCertificationByidFromRemote(certification_id).subscribe(
      data=> { this._certificationlist=data;

        },
      error=> {console.log(error);},
    )
    this.getUserDetails();

  }

}
