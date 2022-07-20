export class Todo {
  id: number;
  title: string;
  created: Date;

  constructor(id: number = 0, title: string = '', created: Date = new Date()) {
    this.id = id;
    this.title = title;
    this.created = created;
  }
}

export interface EditedTodo {
  id: number;
  newTitle: string;
}
