import { createAction, props } from '@ngrx/store';
import { EditedTodo, Todo } from './todo.models';

export const addTodoAction = createAction(
  'create todo',
  props<{ todo: Todo }>()
);
export const deleteTodoAction = createAction(
  'delete todo',
  props<{ id: number }>()
);
export const editTodoAction = createAction(
  'edit todo',
  props<{ editedTodo: EditedTodo }>()
);
