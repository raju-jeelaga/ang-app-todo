import { Component, OnInit } from '@angular/core';
import { TodoService } from './../todo.service';
import {ITodo } from '../../interfaces/todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  isLoading: boolean = false;
  todos: ITodo[] = [];

  constructor( private todoService:TodoService ) {  }

  ngOnInit(): void {
    this.isLoading = true;
    this.todoService.getTodos().subscribe((data: ITodo[]) => {
      this.isLoading = false;
      this.todos = data;
      console.log("Data", this.todos);
    });
  }

}
