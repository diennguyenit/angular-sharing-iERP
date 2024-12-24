import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class IpCountryService {
  constructor(private apiService: ApiService) {}

  url = 'ip/country';

  get(ip: string) {
    return this.apiService.get(`${this.url}/${ip}`, null, {
      responseType: 'text',
    });
  }
}
