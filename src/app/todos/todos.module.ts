import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { AddEditComponent } from './add-edit/add-edit.component';

import { RouterModule } from '@angular/router';
import { TodoService } from './todo.service';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [TodosListComponent, AddEditComponent, TestComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TodosListComponent],
  providers: [TodoService]
})

export class TodosModule { }
