import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent} from './home/home.component';
import {HeaderComponent} from "./header/header.component";
import {CertificationsComponent} from './certifications/certifications.component';
import {AddCertificationComponent} from "./certifications/addcertification/addcertification.component";
import {EditcertificationComponent} from "./certifications/editcertification/editcertification.component";
import {ExperienceComponent} from "./experience/experience.component";
import {AddexperienceComponent} from "./experience/addexperience/addexperience.component";
import {EducationComponent} from "./education/education.component";
import {AddeducationComponent} from "./education/addeducation/addeducation.component";
import {SkillComponent} from "./skill/skill.component";
import {AddskillComponent} from "./skill/addskill/addskill.component";
import {EditexperienceComponent} from "./experience/editexperience/editexperience.component";
import {EditeduacationComponent} from "./education/editeduacation/editeduacation.component";
import {EditskillComponent} from "./skill/editskill/editskill.component";
import {EditprofileComponent} from "./profile/editprofile/editprofile.component";
import {AddprofileComponent} from "./profile/addprofile/addprofile.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'editprofile/:id', component: EditprofileComponent },
  { path: 'addprofile', component: AddprofileComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'addskill', component: AddskillComponent },
  { path: 'editskill', component: EditskillComponent },
  { path: 'editskill/:skill_id', component: EditskillComponent },
  { path: 'certifications',component:CertificationsComponent},
  { path: 'addcertification',component:AddCertificationComponent},
  { path: 'editcertification',component:EditcertificationComponent},
  { path: 'editcertification/:certification_id',component:EditcertificationComponent},
  { path: 'experience', component: ExperienceComponent },
  { path: 'addexperience', component: AddexperienceComponent },
  { path: 'editexperience', component: EditexperienceComponent },
  { path: 'editexperience/:exp_id', component: EditexperienceComponent },
  { path: 'education', component: EducationComponent},
  { path: 'addeducation', component: AddeducationComponent },
  { path: 'editeducation', component:EditeduacationComponent},
  { path: 'editeducation/:edu_id', component:EditeduacationComponent}
  // { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
