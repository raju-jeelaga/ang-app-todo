import { Component, OnInit } from "@angular/core";
import { fromEvent, interval, from, of, Observable, observable } from "rxjs";
import { ajax } from "rxjs/ajax";

@Component({
  selector: "app-observables-demo",
  templateUrl: "./observables-demo.component.html",
  styleUrls: ["./observables-demo.component.css"],
})
export class ObservablesDemoComponent implements OnInit {
  fromEvent: string[] = [];
  ajaxLogs: string[] = [];
  intervalLogs: string[] = [];
  fromArrayLogs: string[] = [];
  ofArrayLogs: string[] = [];
  customObservableLogs: string[] = [];
  customObservableLogs2: string[] = [];
  customObservableLogs3: string[] = [];
  customArrayObservable: string[] = [];

  constructor() {}

  ngOnInit(): void {
    /** From Event */
    const specialEvent = document.getElementById("cstm-event");
    const mouseMoveObservable = fromEvent(specialEvent, "mousemove");

    const subscription = mouseMoveObservable.subscribe((evt: MouseEvent) => {
      this.fromEvent.push(`Coords: ${evt.clientX} X ${evt.clientY}`);
      if (evt.clientX < 230 && evt.clientY < 250) {
        subscription.unsubscribe();
        this.fromEvent.push("Unsubscribe from Mouse Event");
      }
    });

    /** Ajax call */
    let todosUrl = "https://todos-api-dev.herokuapp.com/todos";
    const ajaxObservable = ajax(todosUrl);

    ajaxObservable.subscribe((res) => {
      console.log(res.status, res.response);
      this.ajaxLogs.push(`Response Came`);
    });

    /** Interval */

    const intervalSubscription = interval(1000);

    intervalSubscription.subscribe((n) =>
      this.intervalLogs.push(` It's been ${n} since from subscribing `)
    );

    /** From Array */
    let numbers = [1, 2, 3, 4, 5];
    const fromSubscription = from(numbers);

    fromSubscription.subscribe((n) => this.fromArrayLogs.push(`${n}`));

    /** of method */
    const ofSubscription = of(11, 22, 33, 44, 55);
    ofSubscription.subscribe((n) => {
      this.ofArrayLogs.push(`${n}`);
    });

    /** Custom Obnservable */
    let customObservable = Observable.create(function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
      observer.next(5);
    });

    customObservable.subscribe({
      next: (X) => this.customObservableLogs.push("Got Value of " + X),
      error: (err) => this.customObservableLogs.push("some erros in" + err),
      complete: () => this.customObservableLogs.push(" Done"),
    });

    /** New Custom Obnservable */
    let customObservables2 = new Observable(function (observer) {
      observer.next(11);
      observer.next(22);
      observer.next(33);
      observer.next(44);
      setTimeout(() => {
        observer.next(55);
        observer.complete();
      }, 1000);
    });
    customObservables2.subscribe(
      (X) => this.customObservableLogs2.push("Fetch the Value " + X),
      (err) => this.customObservableLogs2.push("some erros" + err),
      () => this.customObservableLogs2.push("Done")
    );

    /** New Custom Obnservable with Error Method*/

    let customObservableLogs3 = new Observable(function (observer) {
      try {
        observer.next(11);
        observer.next(22);
        observer.next(33);
        throw new Error(" some Error");
      } catch (err) {
        observer.error(err);
      }
    });

    customObservableLogs3.subscribe(
      (X) => this.customObservableLogs3.push("Got value" + X),
      (err) => this.customObservableLogs3.push("Some Error Occured" + err),
      () => this.customObservableLogs3.push("Done")
    );

    /** Custom Obervable with Array */
    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const customArrayObservable = new Observable(function (observer) {
      numbersArray.forEach((n) => {
        observer.next(n);
      });
      observer.complete();
    });

    customArrayObservable.subscribe(
      (X) => this.customArrayObservable.push("Got the Value" + X),
      (err) => this.customArrayObservable.push("Some Erroe" + err),
      () => this.customArrayObservable.push("Done")
    );
  }
}
