import { SubjectsDemoService } from "./../subjects-demo.service";
import { Component, OnInit } from "@angular/core";
import {
  Observable,
  Subject,
  from,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
} from "rxjs";

@Component({
  selector: "app-subject-demo",
  templateUrl: "./subject-demo.component.html",
  styleUrls: ["./subject-demo.component.css"],
})
export class SubjectDemoComponent implements OnInit {
  initTime: number;
  observableLogs: string[] = [];
  subjectLogs: string[] = [];
  subjectObservableLogs: string[] = [];
  subjectNamesLogs: string[] = [];
  regularSubjectLogs: string[] = [];
  behaviourSubjectLogs: string[] = [];
  replySubjectLogs: string[] = [];
  asyncSubjectLogs: string[] = [];

  constructor(private subjectsDemoService: SubjectsDemoService) {}

  ngOnInit(): void {
    this.initTime = Date.now();

    /**Observable Subscribers */
    this.subjectsDemoService.numberObservable$.subscribe((n) => {
      this.observableLogs.push(
        `At ${this.getTimeDifference()} Seconds: Observer1: ${n}`
      );
    });

    setTimeout(() => {
      this.subjectsDemoService.numberObservable$.subscribe((n) => {
        this.observableLogs.push(
          `At ${this.getTimeDifference()} Seconds: Observer2: ${n}`
        );
      });
    }, 1500);

    /**Subject Subscribers */
    this.subjectsDemoService.numberSubject.subscribe((n) => {
      this.subjectLogs.push(
        `At ${this.getTimeDifference()} Seconds: Observer1: ${n}`
      );
    });
    setTimeout(() => {
      this.subjectsDemoService.numberSubject.subscribe((n) => {
        this.subjectLogs.push(
          ` At ${this.getTimeDifference()} Seconds: Observer2: ${n}`
        );
      });
    }, 1500);

    /******** Observable created from subject subscribers ********/

    this.subjectsDemoService.numbersSubjectObservable$.subscribe((n) => {
      this.subjectObservableLogs.push(
        ` At ${this.getTimeDifference()} Seconds Observer1: ${n}`
      );
    });

    setTimeout(() => {
      this.subjectsDemoService.numbersSubjectObservable$.subscribe((n) => {
        this.subjectObservableLogs.push(
          `At ${this.getTimeDifference()} Seconds Observer2: ${n}`
        );
      });
    }, 1500);

    /******** 3. Subject as both observable and observer ********/

    let names: Array<string> = ["Raju", "Jeelaga", "Hello World"];

    let namesSubject: Subject<string> = new Subject<string>();

    namesSubject.subscribe((n) => {
      this.subjectNamesLogs.push(`Observer 1: ${n}`);
    });

    namesSubject.subscribe((n) => {
      this.subjectNamesLogs.push(`Observer 2: ${n}`);
    });

    let namesObservable: Observable<string> = from(names);
    namesObservable.subscribe(namesSubject);

    /***************** Subject Types *******************/
    // Regular Subject
    let regularSubject = new Subject();
    regularSubject.subscribe({
      next: (v) => this.regularSubjectLogs.push(" observer1 " + v),
    });
    regularSubject.next(1);
    regularSubject.next(2);
    regularSubject.subscribe({
      next: (v) => this.regularSubjectLogs.push(" Observer2 " + v),
    });
    regularSubject.next(3);
    regularSubject.next(4);

    // Behaviour Subject
    let behaviourSubject = new BehaviorSubject(0);
    behaviourSubject.subscribe({
      next: (v) => this.behaviourSubjectLogs.push(" Observer 1 " + v),
    });
    behaviourSubject.next(1);
    behaviourSubject.next(2);

    behaviourSubject.subscribe({
      next: (v) => this.behaviourSubjectLogs.push(" Observer 2 " + v),
    });

    behaviourSubject.next(3);

    // Reply Subject
    let replySubject = new ReplaySubject();
    replySubject.subscribe({
      next: (v) => this.replySubjectLogs.push(" Observer 1 " + v),
    });
    replySubject.next(1);
    replySubject.next(2);
    replySubject.next(3);
    replySubject.next(4);
    replySubject.subscribe({
      next: (v) => this.replySubjectLogs.push(" Observer 2 " + v),
    });
    replySubject.next(5);

    //Async Subject
    let asyncSubject = new AsyncSubject();
    asyncSubject.subscribe({
      next: (v) => this.asyncSubjectLogs.push(" Observer 1 " + v),
    });
    asyncSubject.next(1);
    asyncSubject.next(2);
    asyncSubject.next(3);
    asyncSubject.next(4);
    asyncSubject.subscribe({
      next: (v) => this.asyncSubjectLogs.push(" Observer 2 " + v),
    });
    asyncSubject.next(5);
    asyncSubject.complete();
  } // OnInit ends

  private getTimeDifference() {
    return ((Date.now() - this.initTime) / 1000).toFixed(1);
  }
}
