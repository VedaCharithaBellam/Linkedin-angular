import {User} from "./user";

export class Certification {
  getUserId(){
    return (JSON.parse(localStorage.getItem('userData')) as User).id;
  }
  user_id:number;
  certification_id:number;
  certification_name:string;
  certification_desc:string;

  constructor(user_id:number,certification_id:number, certification_name:string, certification_desc:string) {
    this.user_id=this.getUserId();
    this.certification_id=certification_id;
    this.certification_name=certification_name;
    this.certification_desc=certification_desc;
  }
}
