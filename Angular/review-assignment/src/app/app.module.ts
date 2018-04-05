import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgForageModule} from "@ngforage/ngforage-ng4";
import { Ng2FileInputModule } from 'ng2-file-input';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import { FacebookModule } from 'ngx-facebook';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
// import { HomeComponent1 } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { PhotosComponent } from './photos/photos.component';
import { SponsersComponent } from './sponsers/sponsers.component';
import { HomeService } from './home/home.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommentComponent } from './comment/comment.component';
import { LocalForageService } from './localForage.service';
import { LocalForageConfigService } from './localForage.config.service';
import { AuthGuard } from './auth.guard.service';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";
import { TimeoutComponent } from './timeout/timeout.component';
import {NgIdleKeepaliveModule} from '@ng-idle/keepalive';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { SessionTimerComponent } from './session-timer/session-timer.component';
import { TimeOutService } from './timeout/timeout.service';



export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("940115632819722")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("621462507873-c06vqnog0ujivgmjvsu72s0r0u4t2ood.apps.googleusercontent.com")
        }
      ]);
  return config;
}


@NgModule({

  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    ProfileComponent,
    AboutComponent,
    PostComponent,
    PhotosComponent,
    SponsersComponent,
    CommentComponent,
    TimeoutComponent,
    SessionTimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    NgForageModule,
    Ng2FileInputModule.forRoot(),
    NgbModule.forRoot(),
    MomentModule,
    NgIdleKeepaliveModule.forRoot(),
    FacebookModule.forRoot(),
    SocialLoginModule
  ],
  providers: [HomeService, LocalForageService,LocalForageConfigService ,AuthGuard , TimeOutService,
    {
        provide: AuthServiceConfig,
        useFactory: getAuthServiceConfigs
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
