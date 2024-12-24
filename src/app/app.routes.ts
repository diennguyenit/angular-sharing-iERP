import { Routes } from '@angular/router';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { IpCountryComponent } from './components/ip-country/ip-country.component';

export const routes: Routes = [
  { path: 'to-dos', component: ToDoListComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'ip-country', component: IpCountryComponent },
];
