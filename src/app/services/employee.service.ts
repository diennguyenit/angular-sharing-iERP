import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private apiService: ApiService) {}

  url = 'ords/anhpq/demojs/employee';

  get() {
    return this.apiService.get(this.url);
  }

  post(data: any) {
    return this.apiService.post(this.url, data);
  }

  put(data: any) {
    return this.apiService.put(this.url, data);
  }

  delete(id: number) {
    // return this.apiService.delete(`${this.url}/${id}`);
  }
}
