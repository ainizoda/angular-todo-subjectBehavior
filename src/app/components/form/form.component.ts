import { Component } from '@angular/core';

import { Todo } from '../todo/todo.models';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-form',
  styleUrls: ['./form.component.scss'],
  templateUrl: `./form.component.html`,
})
export class FormComponent {
  public todoTitle: string = '';

  constructor(private _todoService: TodoService) {}

  handleSubmit(e: Event) {
    e.preventDefault();

    if (this.todoTitle.trim() === '') {
      alert('Title field should not be empty!');
      return;
    }

    if (this.todoTitle.trim().length < 10) {
      alert('Too short title for To-Do!');
      return;
    }

    let todo: Todo = new Todo(new Date().getTime(), this.todoTitle, new Date());

    this._todoService.addTodo(todo);

    this.todoTitle = '';
  }
}
