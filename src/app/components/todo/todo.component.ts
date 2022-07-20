import { Component, Input } from '@angular/core';

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
  public newTitle: string = '';

  constructor(private _todoService: TodoService) {}

  handleEditModeOn() {
    this.newTitle = this.content.title;
    this.editMode = true;
  }

  handleDeleteTodo(id: number) {
    this._todoService.deleteTodo(id);
  }

  handleSaveChanges(id: number) {
    this._todoService.editTodo({ id, newTitle: this.newTitle });
  }
}
