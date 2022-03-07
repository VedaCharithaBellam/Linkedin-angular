import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {Router} from "@angular/router";
import {Profile} from "../../profile";
import {ProfileService} from "../../profile.service";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent implements OnInit {

  // @ts-ignore
  profile = new Profile();
  user: User;
  msg:boolean=true;
  imageUrl: string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjblwVQ-GlXCaTJnkev2wwBkrWAZQzUehfQ&usqp=CAU";
  fileToUpload: File=null;

  constructor(private _service: ProfileService , private _router:Router) { }
  profileform: FormGroup;
  ngOnInit(): void {
    this.profileform=new FormGroup({
      "occupation": new FormControl("", Validators.required),
      "organisation": new FormControl("", Validators.required),
      "about": new FormControl("", Validators.required),
      "image": new FormControl("", Validators.required)
    });

  }

  handleFileInput(file: FileList){
    this.fileToUpload=file.item(0);

    var reader = new FileReader();
    reader.onload=(event:any)=>{
      this.imageUrl= event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  addprofileformsubmit() {
    this._service.addProfileToRemote(this.profileform.value).subscribe(
      data=>{
        console.log("data added succesfully");
        this.msg=false;
        this._router.navigate(['/profile']);
      },
      error=>console.log(error)
    )
  }

  gotolist() {
    this._router.navigate(['/profile']);
  }


}
