import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegistrationService} from "./registration.service";
import {Observable} from "rxjs";
import {Experience} from "./experience";
import {Skill} from "./skill";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private _http:HttpClient, private _service:RegistrationService) {}
  getUserId(){
    return (JSON.parse(localStorage.getItem('userData')) as User).id;
  }

  fetchSkillListFromRemote():Observable<any>{
    return this._http.get("http://localhost:8090/getskillListById/"+this.getUserId());
  }

  fetchSkillByidFromRemote(skill_id: number):Observable<any>{
    return this._http.get("http://localhost:8090/getskillById/"+skill_id);
  }

  addSkillToRemote(skill: Skill):Observable<any>{
    return this._http.post<any>("http://localhost:8090/addskill/"+this.getUserId(),skill);
  }
  deleteSkillByidFromRemote(skill_id: number):Observable<any>{
    return this._http.delete<any>("http://localhost:8090/deleteskillById/"+skill_id);
  }

}
