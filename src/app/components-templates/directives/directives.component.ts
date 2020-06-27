import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.css"],
})
export class DirectivesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  color: string = "green";

  currentHero = {
    name: "Raju Jeelaga",
  };

  nullHero: null;

  heros = [
    { id: 1, name: "Jeelaga", power: 20 },
    { id: 2, name: "Raju", power: 27 },
    { id: 3, name: "Rithvik", power: 29 },
    { id: 4, name: "Man", power: 25 },
    { id: 5, name: "Power", power: 22 },
  ];

  withDifferentNames = [
    { id: 1, name: "John", power: 2612 },
    { id: 2, name: "Vernice", power: 7036 },
    { id: 3, name: "Chrissie", power: 3331 },
    { id: 4, name: "Tana", power: 5158 },
    { id: 5, name: "Rawley", power: 8948 },
  ];

  withDifferentIds = [
    { id: 11, name: "John", power: 2612 },
    { id: 12, name: "Vernice", power: 7036 },
    { id: 13, name: "Chrissie", power: 3331 },
    { id: 14, name: "Tana", power: 5158 },
    { id: 15, name: "Rawley", power: 8948 },
  ];

  condition: false;

  trackByheros(index: number, hero): number {
    return hero.id;
  }

  updateTheNames() {
    this.heros = this.withDifferentNames;
  }
  updateTheIds() {
    this.heros = this.withDifferentIds;
  }
}
