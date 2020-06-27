import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  DoCheck,
  SimpleChange,
} from "@angular/core";

@Component({
  selector: "app-user-cycle",
  templateUrl: "./user-cycle.component.html",
  styleUrls: ["./user-cycle.component.css"],
})
export class UserCycleComponent implements OnInit {
  @Input() user;

  constructor() {
    console.log(
      "1. Input variables are not avalaibel in constructor method - " +
        this.user
    );
  }

  ngOnChanges(changes: SimpleChange) {
    console.log("2. Component Onchanges");
    console.log("Input Properties first avaliable OnChanges");
    console.log(changes);
    console.log(this.user);
  }

  ngOnInit(): void {
    console.log("3. Component OnInit");
  }

  ngDoCheck() {
    console.log("4.Component DoCheck");
    console.log(this.user.name);
  }

  ngOnDestroy() {
    console.log("5.Component OnDestroy");
  }
}
