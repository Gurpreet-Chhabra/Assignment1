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
import { LocalForageConfigService } from './LocalForage.config.service';
import { AuthGuard } from './auth.guard.service';

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
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgForageModule,
    Ng2FileInputModule.forRoot(),
    NgbModule.forRoot(),
    FacebookModule.forRoot()
  ],
  providers: [HomeService, LocalForageService,LocalForageConfigService ,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
