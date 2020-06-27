import { Injectable } from "@angular/core";

import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TodoTrackerService {
  constructor(private http: HttpClient) {}

  private todoSubject = new Subject();

  public todoObservable$ = this.todoSubject.asObservable();

  track(todo) {
    let action = `${todo.title} is ${todo.done ? `` : `not`} completed`;
    this.todoSubject.next(action);
  }
}
