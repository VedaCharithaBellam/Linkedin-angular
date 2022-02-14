import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegistrationService} from "./registration.service";
import {Observable} from "rxjs";
import {Education} from "./education";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private _http:HttpClient, private _service:RegistrationService) {}

  getUserId(){
    return (JSON.parse(localStorage.getItem('userData')) as User).id;
  }
  fetchEducationListFromRemote():Observable<any>{
    return this._http.get("http://localhost:8090/geteducationListById/"+this.getUserId());
  }

  fetchEducationByidFromRemote(edu_id: number):Observable<any>{
    return this._http.get("http://localhost:8090/geteducationById/"+edu_id);
  }

  addEducationToRemote(education: Education):Observable<any>{
    return this._http.post<any>("http://localhost:8090/addeducation/"+this.getUserId(),education);
  }
  deleteEducationByidFromRemote(edu_id: number):Observable<any>{
    return this._http.delete<any>("http://localhost:8090/deleteeducationById/"+edu_id);
  }
}
