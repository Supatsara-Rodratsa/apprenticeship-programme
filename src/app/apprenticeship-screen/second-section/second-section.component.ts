import { Component, OnInit } from '@angular/core';
import { SubCardModel } from 'src/app/shared/model/model';
import { cardMockData } from '../mock.constant';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.css']
})
export class SecondSectionComponent implements OnInit {

  public mockData: SubCardModel[] = [];  
  
  constructor() { }

  ngOnInit(): void {
    this.mockData = cardMockData;
  }

}
