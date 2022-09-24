import { Component } from '@angular/core';

interface Todo {
  title:string;
  completed : boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoList';
  todoTitle = '';
  todosArr: Todo[] = [];

  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }
    let todo : Todo = {
      title : this.todoTitle,
      completed: false,
    }

    this.todosArr.push(todo);
    this.todoTitle = '';
  }
}
