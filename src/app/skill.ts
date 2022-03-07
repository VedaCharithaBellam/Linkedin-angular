export class Skill{
  skill_id:number;
  skill_name:string;
  skill_level:string;

  constructor(skill_id: number, skill_name: string, skill_level: string) {
    this.skill_id = skill_id;
    this.skill_name = skill_name;
    this.skill_level = skill_level;
  }
}
