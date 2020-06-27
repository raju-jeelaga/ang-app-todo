import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-hero-bio",
  templateUrl: "./hero-bio.component.html",
  styleUrls: ["./hero-bio.component.css"],
})
export class HeroBioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input("hro") hero;

  @Output("deleteReq") deleteHeroEvent = new EventEmitter();

  deleteHero(hero) {
    this.deleteHeroEvent.emit(hero);
  }
}
