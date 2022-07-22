import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Todo } from '../todo/todo.models';
import { TodoService } from '../todo/todo.service';

export interface TodoForm {
  title: string;
  info: {
    description: string;
    author: string;
  };
}

@Component({
  selector: 'app-form',
  styleUrls: ['./form.component.scss'],
  templateUrl: `./form.component.html`,
})
export class FormComponent implements OnInit {
  public todoForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    info: new FormGroup({
      description: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
    }),
  });

  ngOnInit() {
    this.todoForm.valueChanges.subscribe(() => {
      this.shouldButtonBeDisabled = this.todoForm.invalid;
    });
  }

  public shouldButtonBeDisabled: boolean = this.todoForm.invalid;

  constructor(private _todoService: TodoService) {}

  handleSubmit() {
    const todo: Todo = new Todo(this.todoForm.value);

    this._todoService.addTodo(todo);
    this.todoForm.reset();
  }
}
