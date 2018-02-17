import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ADD_TODO , GET_TODOS } from "./constant";
import {TodoEffect} from './todo.effect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'app';
    todo: string;
    todos : Observable<any>;
    constructor( private store : Store<any>, private todoEffect : TodoEffect ) {
        this.todos = store.select("Reducer");
    }

    addTodo() {
        console.log(this.todo);
        this.store.dispatch({ type: ADD_TODO,payload: { id: Math.random(),todo: this.todo}});
        console.log(this.store);
    }

    getTodo() {
        console.log(this.todo);
        this.store.dispatch({ type: GET_TODOS,payload: { id: Math.random(),todo: this.todo}});
        console.log(this.store);
    }
}
