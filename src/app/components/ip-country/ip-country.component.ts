import { Component, OnInit } from '@angular/core';
import { IpCountryService } from 'src/app/services/ip-country.service';

@Component({
  selector: 'app-ip-country',
  imports: [],
  templateUrl: './ip-country.component.html',
  styleUrl: './ip-country.component.scss',
})
export class IpCountryComponent implements OnInit {
  constructor(private ipCountryService: IpCountryService) {}

  ngOnInit(): void {
    this.ipCountryService.get('8.8.8.8').subscribe((res) => {
      console.log(res);
    });
  }
}
