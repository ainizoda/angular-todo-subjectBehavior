import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Todo } from '../todo/todo.models';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
})
export class TodoPageComponent implements OnInit {
  public todo: Todo = new Todo();

  constructor(
    private _route: ActivatedRoute,
    private _location: Location,
    private _todoService: TodoService
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      const idFromParam = parseInt(params.get('id')!);

      this.todo = this._todoService.getTodoById(idFromParam)!;
    });
  }

  goBack() {
    this._location.back();
  }
}
