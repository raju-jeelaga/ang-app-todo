import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data',
  template: `
     <h4>{{title}}</h4>
     <p>My Application name is {{myapp}}</p>
  `,
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  title: string;
  myapp : string;

  constructor() { 
    this.title = 'Hello World';
    this.myapp = 'ANG APP';
  }

  ngOnInit(): void {
  }

}
