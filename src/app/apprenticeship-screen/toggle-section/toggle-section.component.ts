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

  constructor() { }

  ngOnInit(): void {
    this.mockData = toggleMockData;
  }

}
