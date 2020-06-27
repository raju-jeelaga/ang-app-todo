import { Component, OnInit } from "@angular/core";
import { of, pipe } from "rxjs";

import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-operators-demo",
  templateUrl: "./operators-demo.component.html",
  styleUrls: ["./operators-demo.component.css"],
})
export class OperatorsDemoComponent implements OnInit {
  oddSquareLog1: Array<number> = [];
  oddSquareLog2: Array<number> = [];
  oddSquareLog3: Array<number> = [];

  constructor() {}

  ngOnInit(): void {
    // Created observable using of method
    let numbersObservable = of(1, 2, 3, 4, 5);

    /********* Applying map and filter operators ***********/
    let oddFilterFunc = filter((val: number) => val % 2 !== 0);
    let oddFiltered$ = oddFilterFunc(numbersObservable);

    oddFiltered$.subscribe((value) => console.log("filter output", value));

    let oddMapFunc = map((val: number) => val * val);
    let oddMapped$ = oddMapFunc(oddFiltered$);

    oddMapped$.subscribe((value) => this.oddSquareLog1.push(value));

    /********* Applying map and filter operators through Pipe***********/

    let squareOddFunc = pipe(
      filter((n: number) => n % 2 !== 0),
      map((n) => n * n)
    );

    let squareOdds$ = squareOddFunc(numbersObservable);
    squareOdds$.subscribe((x) => this.oddSquareLog2.push(x));

    /********* Applying map and filter operators as Observable ***********/
    let squareOddObservable = numbersObservable.pipe(
      filter((n: number) => n % 2 !== 0),
      map((n) => n * n)
    );
    squareOddObservable.subscribe((x) => this.oddSquareLog3.push(x));
  } //OnInit
}
