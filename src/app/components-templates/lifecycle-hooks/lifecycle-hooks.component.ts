import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lifecycle-hooks",
  templateUrl: "./lifecycle-hooks.component.html",
  styleUrls: ["./lifecycle-hooks.component.css"],
})
export class LifecycleHooksComponent implements OnInit {
  created = false;

  user = {
    name: "Raju Jeelaga",
    age: 29,
  };

  otherUser = {
    name: "Rithvik Jeelaga",
    age: 10,
  };

  currentUser = this.user;

  constructor() {}

  ngOnInit(): void {}

  changeCurrentUser() {
    this.currentUser = this.otherUser;
  }

  changeCurrentUserName() {
    this.currentUser.name = "Jeelaga";
    this.currentUser.age = 20;
  }
}
