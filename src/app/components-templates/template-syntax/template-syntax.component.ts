import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template-syntax",
  templateUrl: "./template-syntax.component.html",
  styleUrls: ["./template-syntax.component.css"],
})
export class TemplateSyntaxComponent implements OnInit {
  myGod = {
    name: "Jesus",
    age: 33.5,
  };

  imageUrl = "./assets/images/hero.jpg";

  fobiddenChanged = true;

  aded = true;
  bine = false;
  mine = false;

  classConditions = {
    addded: this.aded,
    bined: !this.bine,
    mined: this.mine,
  };

  myTitle = 'Template <script>alert("This is My Title")</script>Syntax';

  phone = "9441285665";

  columnNumber = 2;

  classBind = "class2 bind2";

  special = true;

  nullHero = null;

  currentStyles = {
    "font-size": this.aded ? "12px" : "20px",
    "font-weight": !this.bine ? "bold" : "normal",
    "font-style": this.mine ? "italic" : "normal",
  };

  constructor() {}

  ngOnInit(): void {}

  onSave(event) {
    console.log(event);
  }
  onSubmit(heroForm) {
    console.log(heroForm);
  }

  getHeroImage() {
    return this.imageUrl;
  }

  getVal() {
    return 1;
  }

  updateHero() {
    this.myGod = {
      name: "God is Jesus",
      age: 10000,
    };
  }
}
