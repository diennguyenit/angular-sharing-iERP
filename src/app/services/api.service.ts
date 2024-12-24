import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiEndpoint = environment.API_ENDPOINT;

  constructor(protected http: HttpClient) {}

  public get<T>(url: string, params?: any, headers?: any) {
    return this.http.get<T>(this.apiEndpoint + url, { params, headers });
  }

  public post<T>(url: string, data?: any, headers?: any) {
    return this.http.post(this.apiEndpoint + url, data, { headers });
  }

  public put<T>(url: string, data: any, headers?: any) {
    return this.http.put<T>(this.apiEndpoint + url, data, { headers });
  }

  public patch<T>(url: string, data: any, headers?: any): Observable<T> {
    return this.http.patch<T>(this.apiEndpoint + url, data, { headers });
  }

  public delete<T>(url: string, data: any, headers?: any) {
    return this.http.delete<T>(this.apiEndpoint + url, { headers });
  }
}
