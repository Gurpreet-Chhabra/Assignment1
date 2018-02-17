import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import {Action} from '@ngrx/store';
import { Observable } from "rxjs";
import { TodoService } from './todo.service';
import "rxjs/add/operator/switchMap";
import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR, ADD_TODO, ADD_TODO_SUCCESS,ADD_TODO_ERROR } from "./constant";

@Injectable()
export class TodoEffect {
  constructor( private actions$ : Actions, private todoService : TodoService ) {

  }
  
@Effect() addTodo$ = this.actions$.ofType(ADD_TODO).switchMap(action =>
                      this.todoService.addTodo(action)
                      .map(todo => ({type: ADD_TODO_SUCCESS, payload: todo}))
                      .catch(() => Observable.of({type: ADD_TODO_ERROR})));
}

@Injectable()
export class testEffects {
  constructor( private actions$ : Actions, private todoService : TodoService ) {

  }
  @Effect() getTodo$ = this.actions$.ofType(GET_TODOS).switchMap(action =>
                        this.todoService.getTodo(action)
                        .map(todo => ({type: GET_TODOS_SUCCESS, payload: todo}))
                        .catch(() => Observable.of({type: GET_TODOS_ERROR})));
}
