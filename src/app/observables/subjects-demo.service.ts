import { Injectable } from "@angular/core";

import { Observable, Subject } from "rxjs";
import { ObserveOnOperator } from "rxjs/internal/operators/observeOn";

@Injectable({
  providedIn: "root",
})
export class SubjectsDemoService {
  constructor() {
    this.emitNumbers();
  }

  numbers: Array<number> = [1, 2, 3, 4, 5];
  numberObservable$: Observable<number> = Observable.create((observer) => {
    let id = 0;
    let intervalId = setInterval(() => {
      observer.next(this.numbers[id]);
      if (id === this.numbers.length - 1) {
        observer.complete();
        clearInterval(intervalId);
      } else {
        ++id;
      }
    }, 1000);
  });

  numberSubject = new Subject<number>();

  emitNumbers() {
    let id = 0;

    let intervalId = setInterval(() => {
      this.numberSubject.next(this.numbers[id]);
      if (id === this.numbers.length - 1) {
        this.numberSubject.complete();
        clearInterval(intervalId);
      } else {
        ++id;
      }
    }, 1000);
  }

  numbersSubjectObservable$ = this.numberSubject.asObservable();
}
