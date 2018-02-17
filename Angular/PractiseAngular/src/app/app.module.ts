import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { TodoService } from './todo.service';
import {TodoEffect, testEffects} from './todo.effect';
import {Reducer} from './reducer';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    StoreModule.forRoot({Reducer}),
    EffectsModule.forRoot([TodoEffect, testEffects])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
