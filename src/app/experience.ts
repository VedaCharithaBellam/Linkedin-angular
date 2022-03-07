export class Experience{
  exp_id:number;
  exp_org:string;
  exp_role:string;
  exp_desc:string;
  exp_start_date:Date;
  exp_end_date:Date;

  constructor(exp_id: number, exp_org: string, exp_role: string, exp_desc: string, exp_start_date: Date, exp_end_date: Date) {
    this.exp_id = exp_id;
    this.exp_org = exp_org;
    this.exp_role = exp_role;
    this.exp_desc = exp_desc;
    this.exp_start_date = exp_start_date;
    this.exp_end_date = exp_end_date;
  }
}
