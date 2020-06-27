import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-url',
  templateUrl: './display-data-url.component.html',
  styleUrls: ['./display-data-url.component.css']
})
export class DisplayDataUrlComponent implements OnInit {

  title: string;
  mylittle: string;
  followers : string[] = ['jhon', 'paul', 'yakob', 'David', 'Daniel'];

  constructor() { 
    this.title = 'My Anugular APP';
    this.mylittle = 'Jhon is a Good Boy';
    let number = 29;
  }

  ngOnInit(): void {
  }

}
