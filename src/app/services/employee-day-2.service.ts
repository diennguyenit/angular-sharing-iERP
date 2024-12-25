import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDay2Service {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<any>(
      'https://apexdev.ierp.vn/ords/anhpq/demojs/employee'
    );
  }

  post(data: any) {
    return this.http.post(
      'https://apexdev.ierp.vn/ords/anhpq/demojs/employee',
      data
    );
  }
}
