import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { BehaviorSubject, Observable } from 'rxjs';

import { EditedTodo, Todo } from './todo.models';

@Injectable()
export class TodoService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);

  constructor() {}

  getAllTodos(): Observable<Todo[]> {
    return this.todosSubject$.asObservable();
  }

  addTodo(todo: Todo) {
    this.todosSubject$.next([...this.todosSubject$.getValue(), todo]);
  }

  deleteTodo(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.getValue().filter((todo) => todo.id !== id)
    );
  }

  editTodo(editedTodo: EditedTodo) {
    this.todosSubject$.next(
      this.todosSubject$.getValue().map((todo) => {
        if (todo.id !== editedTodo.id) {
          return todo;
        }

        return { ...todo, title: editedTodo.newTitle };
      })
    );
  }

  getTodoById(id: number): Todo | undefined {
    return this.todosSubject$.getValue().find((todo) => todo.id === id);
  }
}
