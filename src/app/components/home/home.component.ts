import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '../todo/todo.models';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  public todos: Observable<Todo[]>;

  constructor(private _todoService: TodoService) {
    this.todos = _todoService.getAllTodos();
  }

  ngOnInit() {}
}
