import { Component, OnInit } from "@angular/core";

import { ColorChangeService } from "../color-change.service";

@Component({
  selector: "app-color-input",
  templateUrl: "./color-input.component.html",
  styleUrls: ["./color-input.component.css"],
})
export class ColorInputComponent implements OnInit {
  constructor(private ColorChangeService: ColorChangeService) {}

  ngOnInit(): void {}

  color: string = "red";

  changeColor() {
    this.ColorChangeService.emitColor(this.color);
  }
}
