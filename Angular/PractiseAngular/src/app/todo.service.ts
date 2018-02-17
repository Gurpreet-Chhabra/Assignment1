import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class TodoService {

    addTodo(title) {
        console.log("HERE");
      return Observable.timer(1000)
        .mapTo({id: Math.random(), title, completed: false})
    }

    getTodo(title) {
        console.log("getTodo effect");
      return Observable.timer(1000)
        .mapTo({id: Math.random(), title, completed: false})
    }
}
