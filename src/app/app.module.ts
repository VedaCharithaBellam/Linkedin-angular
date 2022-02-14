import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CertificationsComponent } from './certifications/certifications.component';
import {AddCertificationComponent}from './certifications/addcertification/addcertification.component';
import { HttpClientModule} from "@angular/common/http";
//import { CertificateEditComponent } from './certifications/certificate-edit/certificate-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {from} from "rxjs";
import { EditcertificationComponent } from './certifications/editcertification/editcertification.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { AddexperienceComponent } from './experience/addexperience/addexperience.component';
import { AddeducationComponent } from './education/addeducation/addeducation.component';
import { SkillComponent } from './skill/skill.component';
import { AddskillComponent } from './skill/addskill/addskill.component';
import { EditskillComponent } from './skill/editskill/editskill.component';
import { EditeduacationComponent } from './education/editeduacation/editeduacation.component';
import { EditexperienceComponent } from './experience/editexperience/editexperience.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { AddprofileComponent } from './profile/addprofile/addprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CertificationsComponent,
    //CertificateEditComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddCertificationComponent,
    EditcertificationComponent,
    EducationComponent,
    ExperienceComponent,
    AddexperienceComponent,
    AddeducationComponent,
    SkillComponent,
    AddskillComponent,
    EditskillComponent,
    EditeduacationComponent,
    EditexperienceComponent,
    EditprofileComponent,
    AddprofileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    appRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
