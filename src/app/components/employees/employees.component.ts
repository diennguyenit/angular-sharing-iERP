import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services';
import { TableModule } from 'primeng/table';
import { EmployeeDay2Service } from 'src/app/services/employee-day-2.service';
import { DatePicker } from 'primeng/datepicker';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Card } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-employees',
  imports: [
    TableModule,
    DatePicker,
    FormsModule,
    ReactiveFormsModule,
    Card,
    InputTextModule,
    InputNumber,
    ButtonModule,
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];

  date: Date;

  form: any;

  constructor(
    private employeeService: EmployeeService,
    private employeeServiceDay2: EmployeeDay2Service,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.get();

    this.form = this.fb.group({
      empNo: [null, Validators.required],
      eName: [null, Validators.required],
      job: [null],
      hireDate: [null],
      sal: [null],
    });
  }

  save() {
    let data = this.form.value;

    data.hireDate = data.hireDate.toLocaleDateString('vi-VN');

    console.log(data);

    this.employeeServiceDay2.post(data).subscribe((res) => {
      console.log(res);
      this.get();
    });
  }

  get() {
    this.employeeServiceDay2.get().subscribe((response) => {
      this.employees = response;
    });
  }
}

// {
//   "empNo": 10003,
//   "eName": "MINHVC13",
//   "job": "DEV",
//   "hireDate": "30/11/2020",
//   "sal": 100
// }
