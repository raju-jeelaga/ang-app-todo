import { Component, OnInit, Input } from "@angular/core";
import { TodoTrackerService } from "../simple-todo/todo-tracker.service";

@Component({
  selector: "app-todo-detail",
  templateUrl: "./todo-detail.component.html",
  styleUrls: ["./todo-detail.component.css"],
})
export class TodoDetailComponent implements OnInit {
  constructor(public tracker: TodoTrackerService) {}

  ngOnInit(): void {}
  @Input() todo;

  toggle() {
    this.todo.done = !this.todo.done;
    this.tracker.track(this.todo);
  }
}
