import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ITodo } from '../../interfaces/todo';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  isLoading: boolean = false;
  todos: ITodo[] = [];
  constructor( private todoService:TodoService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.todoService.getTodos().subscribe( (data: ITodo[]) => {
      this.isLoading = false
      this.todos = data;
      console.log('Received', this.todos);
    }) 
  }

}
