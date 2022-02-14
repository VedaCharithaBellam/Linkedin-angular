import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegistrationService} from "./registration.service";
import {User} from "./user";
import {Observable} from "rxjs";
import {Skill} from "./skill";
import {Profile} from "./profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _http:HttpClient, private _service:RegistrationService) {}
  getUserId(){
    return (JSON.parse(localStorage.getItem('userData')) as User).id;
  }

  fetchProfileListFromRemote():Observable<any>{
    return this._http.get("http://localhost:8090/getprofileListById/"+this.getUserId());
  }

  fetchProfileByidFromRemote(id: number):Observable<any>{
    return this._http.get("http://localhost:8090/getprofileById/"+id);
  }

  addProfileToRemote(profile: Profile):Observable<any>{
    return this._http.post<any>("http://localhost:8090/addprofile/"+this.getUserId(),profile);
  }
  deleteProfileByidFromRemote(id: number):Observable<any>{
    return this._http.delete<any>("http://localhost:8090/deleteprofileById/"+id);
  }

}
