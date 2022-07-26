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
  public hasError: boolean = false;

  public todoForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.min(8),
      Validators.max(25),
    ]),
    info: new FormGroup({
      description: new FormControl('', [
        Validators.required,
        Validators.min(8),
      ]),
      author: new FormControl('', [Validators.required, Validators.min(8)]),
    }),
  });

  public todoControls: any = this.todoForm.controls;

  constructor(private _todoService: TodoService) {}

  validateControl(control: AbstractControl | null) {
    return control?.invalid && this.hasError;
  }

  logError(control: AbstractControl | null) {
    let errorTexts: any = {
      required: 'This field is required',
      minlength: 'This field must be at least 8 characters long',
    };

    if (control?.errors) {
      return errorTexts[Object.keys(control?.errors)[0]];
    }
  }

  handleSubmit() {
    if (this.todoForm.invalid) {
      this.hasError = true;
      return;
    }

    this.hasError = false;

    const todo: Todo = new Todo(this.todoForm.value);

    this._todoService.addTodo(todo);
    this.todoForm.reset();
  }
}
