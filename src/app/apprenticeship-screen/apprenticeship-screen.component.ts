import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/service/api.service';

@Component({
  selector: 'app-apprenticeship-screen',
  templateUrl: './apprenticeship-screen.component.html',
  styleUrls: ['./apprenticeship-screen.component.css']
})
export class ApprenticeshipScreenComponent implements OnInit {

  programDetails: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getApiResponse().subscribe(res => {
      this.programDetails = res;
      console.log(this.programDetails);
      
    });
  }

}
