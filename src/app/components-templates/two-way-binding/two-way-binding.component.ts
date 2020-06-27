import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-two-way-binding",
  templateUrl: "./two-way-binding.component.html",
  styleUrls: ["./two-way-binding.component.css"],
})
export class TwoWayBindingComponent implements OnInit {
  permeneantGod = {
    name: "Jesus",
  };

  constructor() {}

  ngOnInit(): void {}

  checkGodName() {
    console.log(this.permeneantGod.name);
  }

  setUpperCase(value) {
    this.permeneantGod.name = value.toUpperCase();
  }
}
