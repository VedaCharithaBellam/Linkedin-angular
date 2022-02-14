import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegistrationService} from "./registration.service";
import {Observable} from "rxjs";
import {Certification} from "./certification";
import {Experience} from "./experience";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private _http:HttpClient, private _service:RegistrationService) {}

  getUserId(){
    return (JSON.parse(localStorage.getItem('userData')) as User).id;
  }

  fetchExperienceListFromRemote():Observable<any>{
    return this._http.get("http://localhost:8090/getexperienceListById/"+this.getUserId());
  }

  fetchExperienceByidFromRemote(exp_id: number):Observable<any>{
    return this._http.get("http://localhost:8090/getexperienceById/"+exp_id);
  }

    addExperienceToRemote(experience: Experience):Observable<any>{
    return this._http.post<any>("http://localhost:8090/addexperience/"+this.getUserId(),experience);
  }
  deleteExperienceByidFromRemote(exp_id: number):Observable<any>{
    return this._http.delete<any>("http://localhost:8090/deleteexperienceById/"+exp_id);
  }
}
