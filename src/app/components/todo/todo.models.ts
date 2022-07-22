import { TodoForm } from '../form/form.component';

export class Todo {
  id: number;
  created: Date;
  title: string;
  description: string;
  author: string;

  constructor(
    todo: TodoForm = { title: '', info: { description: '', author: '' } }
  ) {
    this.id = new Date().getTime();
    this.created = new Date();
    this.title = todo.title;
    this.description = todo.info.description;
    this.author = todo.info.author;
  }
}

export interface EditedTodo {
  id: number;
  newTitle: string;
  newDescription: string;
  newAuthor: string;
}
