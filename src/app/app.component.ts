import { Component } from '@angular/core';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
