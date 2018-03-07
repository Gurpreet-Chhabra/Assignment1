import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgForageModule} from "@ngforage/ngforage-ng4";
import {RouterModule , Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { LocalforageService } from './localforage.service';
import { LocalforageconfigService } from './localforageconfig.service';
import { AuthGuard} from './auth.guard';
import { BookListService } from './booklist/booklist.service';
import { BookService } from './book/book.service';
import { NewComponent } from './new/new.component';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login',component: LoginComponent},
    {path: 'close', redirectTo: 'login',pathMatch: 'full'},
    {path: 'book',component: BooklistComponent, canActivate:[AuthGuard]},
    {path: 'book/:id',component: BookComponent},
    {path: 'back', redirectTo: 'book',pathMatch: 'full'},
    {path: 'logout', redirectTo: 'login'},
    {path: '**', redirectTo: 'login'}
    // {path: '', redirectTo: 'login', pathMatch: 'full' },
    // {path: 'login',component: LoginComponent},
    // {path: 'book',component: BooklistComponent, canActivate:[AuthGuard]},
    // {path: '**', redirectTo: 'login'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarLeftComponent,
    BooklistComponent,
    BookComponent,
    LoginComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgForageModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
      LocalforageService,LocalforageconfigService,AuthGuard, BookListService , BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
