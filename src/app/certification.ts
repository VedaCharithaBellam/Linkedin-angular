export class Certification {

  user_id:number;
  certification_id:number;
  certification_name:string;
  certification_desc:string;

  constructor(user_id:number,certification_id:number, certification_name:string, certification_desc:string) {

    this.certification_id=certification_id;
    this.certification_name=certification_name;
    this.certification_desc=certification_desc;
  }
}
