import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoList';
  todoTitle = '';
  todosArr: string[] = [];

  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }

    this.todosArr.push(this.todoTitle);
    this.todoTitle = '';
  }
}
