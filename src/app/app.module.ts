import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillListComponent } from './skills/skill-list/skill-list.component';
import { SkillDetailComponent } from './skills/skill-detail/skill-detail.component';
import { SkillItemComponent } from './skills/skill-list/skill-item/skill-item.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { HttpClientModule} from "@angular/common/http";
//import { CertificateEditComponent } from './certifications/certificate-edit/certificate-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    SkillListComponent,
    SkillDetailComponent,
    SkillItemComponent,
    CertificationsComponent,
    //CertificateEditComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    appRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
