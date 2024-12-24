import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../../../models';

@Component({
  selector: 'app-to-do',
  imports: [],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss'
})
export class ToDoComponent {
  @Input() toDo: ToDo;
}
