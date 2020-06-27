import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipes",
  templateUrl: "./pipes.component.html",
  styleUrls: ["./pipes.component.css"],
})
export class PipesComponent implements OnInit {
  birthday = new Date(1992, 14, 10);

  constructor() {}

  ngOnInit(): void {}

  name: string = "Raju Jeelaga Paul";

  heros = [
    { name: "Raju", canFly: true },
    { name: "Jeelaga", canFly: false },
    { name: "Rithvik", canFly: true },
    { name: "Man", canFly: false },
    { name: "Pawar", canFly: true },
  ];

  newHero = {
    name: "",
    canFly: true,
  };

  pushHero(name, canFly) {
    let heroObj = {
      name: name,
      canFly: canFly,
    };
    this.heros.push(heroObj);
    this.newHero.name = "";
  }

  concatHero(name, canFly) {
    let heroObj = {
      name: name,
      canFly: canFly,
    };
    this.heros = this.heros.concat(heroObj);
    this.newHero.name = "";
  }

  country: any = ["India", "Newzeland", "Pakistan", "USA"];

  add(value) {
    this.country.push(value);
    console.log(this.country);
  }
}
