import {Injectable, Input} from '@angular/core';
import { Certification } from "./certification";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from "./user"
import {RegistrationService} from "./registration.service";
import {LoginComponent} from "./login/login.component";

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  private id:LoginComponent;

  constructor(private _http:HttpClient, private _service:RegistrationService) {}

 getUserId(){
   return (JSON.parse(localStorage.getItem('userData')) as User).id;
 }

  fetchCertificationListFromRemote():Observable<any>{

    return this._http.get("http://localhost:8090/getcertificationListById/"+ this.getUserId());
  }
  fetchCertificationByidFromRemote(certification_id: number):Observable<any>{
    return this._http.get("http://localhost:8090/getcertificationById/"+certification_id);
  }
  addCertificationToRemote( certification: Certification):Observable<any>{
    return this._http.post<any>("http://localhost:8090/addcertification/"+this.getUserId(),certification);
  }
  deleteCertificationByidFromRemote(certification_id: number):Observable<any>{
    return this._http.delete<any>("http://localhost:8090/deletecertificationById/"+certification_id);
  }


}
