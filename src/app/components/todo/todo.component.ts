import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Todo } from './todo.models';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  styleUrls: ['./todo.component.scss'],
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input() public content: Todo = new Todo();

  public editMode: boolean = false;

  public todoEditForm: FormGroup = new FormGroup({
    newTitle: new FormControl(''),
    newDescription: new FormControl(''),
    newAuthor: new FormControl(''),
  });

  constructor(private _todoService: TodoService) {}

  handleEditModeOn() {
    this.todoEditForm.setValue({
      newTitle: this.content.title,
      newDescription: this.content.description,
      newAuthor: this.content.author,
    });

    this.editMode = true;
  }

  handleDeleteTodo(id: number) {
    this._todoService.deleteTodo(id);
  }

  handleSaveChanges(id: number) {
    this._todoService.editTodo({ id, ...this.todoEditForm.value });
  }
}
