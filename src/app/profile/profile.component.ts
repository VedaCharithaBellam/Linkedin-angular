import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";
import {Profile} from "../profile";
import {ProfileService} from "../profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  _profilelist: Profile[];
  msg: boolean = false;
  constructor(private _service:ProfileService, private  _router : Router) {
  }

  ngOnInit(): void {
    this._service.fetchProfileListFromRemote().subscribe(
      data=>{console.log("response recieved"),
        console.log(data),
        this._profilelist=data;},

      error=>console.log("exception occured")
    )
  }

  goToAddProfile(){
    this._router.navigate(['/addprofile']);
    this.msg=true
  }

  goToEditProfile(id:number) {

    this._router.navigate(['/editprofile',id]);
  }

  deleteProfile(id: number) {
    this._service.deleteProfileByidFromRemote(id).subscribe(
      data=> {console.debug("deleted succesfully");
        this._router.navigate(['/profile']);
      },
      error=> console.log(error)
    )
  }
  name=(JSON.parse(localStorage.getItem('userData')) as User).username;
  email=(JSON.parse(localStorage.getItem('userData')) as User).email;

}
