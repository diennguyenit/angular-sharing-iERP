import { Component } from '@angular/core';
import { ToDoComponent } from './to-do/to-do.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [ToDoComponent, FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  toDoList = [
    {
      name: 'Quét nhà',
      status: false
    },
    {
      name: 'Rửa bát',
      status: true
    },
    {
      name: 'đổ rác',
      status: true
    },
  ]

  newToDo;

  create() {
    this.toDoList.push({
      name: this.newToDo,
      status: false
    });

    this.newToDo = '';
  }
}
