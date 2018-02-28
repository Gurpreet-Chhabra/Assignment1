import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CommentComponent } from './comment/comment.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth.guard.service';
const routes: Routes = [
    { path: '' , redirectTo: 'home' , pathMatch: 'full' },
    { path: 'home' , component: HomeComponent, children:[
        { path: '' , component: LoginComponent }
    ]},
    { path: 'profile' , component: ProfileComponent, canActivate:[AuthGuard], children:[
        { path: '' , component: DashboardComponent},
        { path: 'comment' , component: CommentComponent}
    ]},
    {path: 'contactus' , component: ContactComponent},
    { path: '**' , redirectTo: 'home' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
