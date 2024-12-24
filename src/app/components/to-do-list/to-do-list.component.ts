import { Component } from '@angular/core';
import { ToDoComponent } from './to-do/to-do.component';
import { FormsModule } from '@angular/forms';
import { ToDo } from '../../models';

@Component({
  selector: 'app-to-do-list',
  imports: [ToDoComponent, FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent {
  toDoList: ToDo[] = [];

  currentTitle: string;

  edittedToDo: ToDo;

  save() {
    if (!this.currentTitle) {
      return;
    }

    if (this.edittedToDo) {
      this.edit();
      return;
    }

    this.create();
  }

  create() {
    this.toDoList.push({
      id: new Date().getTime(),
      title: this.currentTitle,
      completed: false,
    });

    this.reset();
  }

  presentEdit(toDo: ToDo) {
    this.edittedToDo = toDo;
    this.currentTitle = toDo.title;
  }

  edit() {
    this.edittedToDo.title = this.currentTitle;
    this.reset();
  }

  delete(toDo: ToDo) {
    this.toDoList = this.toDoList?.filter((item) => item.id !== toDo.id);
  }

  reset() {
    this.currentTitle = undefined;
    this.edittedToDo = undefined;
  }
}
