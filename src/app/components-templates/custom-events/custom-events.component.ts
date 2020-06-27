import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-custom-events",
  templateUrl: "./custom-events.component.html",
  styleUrls: ["./custom-events.component.css"],
})
export class CustomEventsComponent implements OnInit {
  heros = [
    { id: 1, name: "Raju", power: 2000 },
    { id: 1, name: "Raj", power: 1400 },
    { id: 2, name: "Jeelaga", power: 1000 },
    { id: 3, name: "Prince", power: 2500 },
    { id: 4, name: "Rithvik", power: 3000 },
  ];

  constructor() {}

  ngOnInit(): void {}

  delete(heroObj) {
    console.log(heroObj);
  }
}
