import { Component, OnInit } from "@angular/core";
import { of, from, interval, fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  map,
  filter,
  combineLatest,
  merge,
  concat,
  startWith,
  withLatestFrom,
  zip,
  take,
  debounceTime,
  distinct,
  distinctUntilChanged,
  takeUntil,
  bufferTime,
} from "rxjs/operators";

@Component({
  selector: "app-different-operators",
  templateUrl: "./different-operators.component.html",
  styleUrls: ["./different-operators.component.css"],
})
export class DifferentOperatorsComponent implements OnInit {
  numberedMappedLog: Array<number> = [];
  numberFilteredLog: Array<number> = [];
  combineLatestLogs: Array<string> = [];
  mergedLog: Array<number> = [];
  concatLog: Array<number> = [];
  startWithLog: Array<number> = [];
  withLatestLog: Array<string> = [];
  zipLog: Array<Array<number>> = [];
  debounceLog: Array<any> = [];
  distantLog: Array<number> = [];
  distinctUntilChangedLogs: Array<number> = [];
  takeLogs: Array<number> = [];
  takeUntilLogs: Array<number> = [];
  bufferTimeLogs: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let numberObservable = of(1, 2, 3, 4, 5);

    /** map operator */
    let mapOpera = numberObservable.pipe(map((value) => value * 10));
    mapOpera.subscribe((x) => this.numberedMappedLog.push(x));

    /** Filter Operator */
    let filterOper = numberObservable.pipe(filter((n) => n % 2 == 0));
    filterOper.subscribe((x) => this.numberFilteredLog.push(x));

    /** combineLatest Operator */
    let observable1$ = interval(1000);
    let observable2$ = interval(1500);

    let combined$ = observable1$.pipe(
      combineLatest(observable2$, (val1, val2) => {
        return `${val1} - ${val2}`;
      })
    );

    combined$.subscribe((n) => this.combineLatestLogs.push(n));

    /******* merge operator *********/
    let mergedLogs = observable1$.pipe(merge(observable2$));
    mergedLogs.subscribe((v) => this.mergedLog.push(v));

    /******* Concat operator *********/
    let numb1$ = of(1, 2, 3);
    let numb2$ = of(8, 9, 10);

    let concatNum = numb1$.pipe(concat(numb2$));
    concatNum.subscribe((v) => this.concatLog.push(v));

    /******* Startwith operator *********/
    let numb3$ = of(1, 2, 3);

    let startWith$ = numb3$.pipe(startWith(0));
    startWith$.subscribe((v) => this.startWithLog.push(v));

    /******* withLatestFrom operator *********/
    const source = interval(5000);
    const secondSource = interval(1500);
    const final = source.pipe(
      withLatestFrom(secondSource),
      map(([first, second]) => {
        return `First Source (5s) ${first} Second Source (1s) ${second}`;
      })
    );

    final.subscribe((x) => this.withLatestLog.push(x));

    /******* Zip operator *********/
    const num1$ = interval(1000);
    const num2$ = num1$.pipe(take(2));

    const number3$ = num1$.pipe(zip(num2$));
    number3$.subscribe((x) => this.zipLog.push(x));

    /******* debounceTime operator *********/

    const inputEle: HTMLInputElement = <HTMLInputElement>(
      document.getElementById("name")
    );
    const event$ = fromEvent(inputEle, "keyup").pipe(debounceTime(500));
    event$.subscribe((event) => this.debounceLog.push(inputEle.value));

    /******* distinct & distinctUntilChanged operator *********/

    const duplicate$ = from([1, 1, 2, 2, 3, 1, 2, 3]);
    duplicate$.pipe(distinct()).subscribe((x) => this.distantLog.push(x));

    duplicate$
      .pipe(distinctUntilChanged())
      .subscribe((val) => this.distinctUntilChangedLogs.push(val));

    /******* take operator *********/

    const interval$ = interval(1000);
    interval$.pipe(take(5)).subscribe((v) => this.takeLogs.push(v));

    /******* takeUntil operator *********/
    const source$ = interval(1000);
    const timer$ = interval(5000);

    source$
      .pipe(takeUntil(timer$))
      .subscribe((v) => this.takeUntilLogs.push(v));

    /******* bufferTime operator *********/

    const buffer$ = interval(500);
    buffer$
      .pipe(bufferTime(2000))
      .subscribe((v) => this.bufferTimeLogs.push(v));
  }
}
