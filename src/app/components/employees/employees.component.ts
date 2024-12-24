import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-employees',
  imports: [TableModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.get().subscribe((data) => {
      console.log(data);
    });
  }
}
