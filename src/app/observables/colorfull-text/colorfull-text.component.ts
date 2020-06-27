import { ColorChangeService } from "./../color-change.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-colorfull-text",
  templateUrl: "./colorfull-text.component.html",
  styleUrls: ["./colorfull-text.component.css"],
})
export class ColorfullTextComponent implements OnInit {
  color: string = "red";
  constructor(private ColorChangeService: ColorChangeService) {}

  ngOnInit(): void {
    this.ColorChangeService.color$.subscribe((color) => (this.color = color));
  }
}
