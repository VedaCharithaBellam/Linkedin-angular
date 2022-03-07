export class Education{

  user_id:number;
  edu_id:number;
  edu_org:string;
  edu_stream:string;
  edu_start_date:Date;
  edu_end_date:Date;
  constructor(user_id:number,edu_id:number, edu_org:string, edu_stream:string,edu_start_date:Date,edu_end_date:Date) {

    this.edu_id=edu_id;
    this.edu_org=edu_org;
    this.edu_stream=edu_stream;
    this.edu_start_date=edu_start_date;
    this.edu_end_date=edu_end_date;
  }
}
