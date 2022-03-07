export class Profile{
  id:number;
  occupation:string;
  organisation:string;
  image:string;
  about:string;

  constructor(id: number, occupation: string, organisation: string, image: string, about: string) {
    this.id = id;
    this.occupation = occupation;
    this.organisation = organisation;
    this.image = image;
    this.about = about;
  }
}
