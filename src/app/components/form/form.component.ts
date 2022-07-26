import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormControlState,
  FormGroup,
  Validators,
} from '@angular/forms';

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
export class FormComponent {
  public isFormSubmitted: boolean = false;

  public formErrors: Record<string, string> = {
    title: '',
    'info.description': '',
    'info.author': '',
  };

  public todoForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    info: new FormGroup({
      description: new FormControl(''),
      author: new FormControl('', [Validators.required, Validators.min(8)]),
    }),
  });

  constructor(private _todoService: TodoService) {}

  shouldLogError(controlName: string) {
    return this.isFormSubmitted && this.checkControlForError(controlName);
  }

  checkControlForError(controlName: string) {
    const value = this.todoForm.get(controlName)?.value;

    let caughtError: boolean = false;

    if (value?.trim() === '') {
      this.formErrors[controlName] = 'This field is required';

      caughtError = true;
    }

    if (value?.trim().length < 8) {
      this.formErrors[controlName] =
        'This field must be at least 8 characters long';

      caughtError = true;
    }

    return caughtError;
  }

  validateForm() {
    let errorCount = 0;

    const fields = Object.keys(this.formErrors);

    for (let i = 0; i < fields.length; i++)
      if (this.checkControlForError(fields[i])) errorCount++;

    return errorCount > 0;
  }

  handleSubmit() {
    this.isFormSubmitted = true;

    if (this.validateForm()) {
      return;
    }

    const todo: Todo = new Todo(this.todoForm.value);

    this._todoService.addTodo(todo);
    this.todoForm.reset();
  }
}
