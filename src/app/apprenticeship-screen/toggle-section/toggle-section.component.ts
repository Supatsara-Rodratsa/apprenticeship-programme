import { Component, OnInit } from '@angular/core';
import { ToggleModel } from 'src/app/shared/model/model';
import { toggleMockData } from '../mock.constant';

@Component({
  selector: 'app-toggle-section',
  templateUrl: './toggle-section.component.html',
  styleUrls: ['./toggle-section.component.css']
})
export class ToggleSectionComponent implements OnInit {

  mockData: ToggleModel[] = [];
  placeholder: string = 'Program conditions';
  dropDownList = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Admission' },
    { id: 3, name: 'Harbour.Space' },
    { id: 4, name: 'SCG' },
    { id: 5, name: 'Living in Bangkok' },
  ];

  toggle: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.mockData = toggleMockData;
  }

  openDropdown() {
    this.toggle = !this.toggle
  }

}
