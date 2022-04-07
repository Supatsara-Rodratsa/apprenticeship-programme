import { Component, OnInit } from '@angular/core';
import { SlidingCardModel } from 'src/app/shared/model/model';
import { slidingCardMockData } from '../mock.constant';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-sliding-section',
  templateUrl: './sliding-section.component.html',
  styleUrls: ['./sliding-section.component.css']
})
export class SlidingSectionComponent implements OnInit {

  public mockData: SlidingCardModel[] = [];
  public selectedPrevClass: string = '';
  public selectedNextClass: string =  '';
  // public slideConfig: any;

  constructor(private breakpointObserver: BreakpointObserver,) {
    this.breakpointObserver.observe([
      "(max-width: 992px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
         this.selectedPrevClass = 'slick-prev';
         this.selectedNextClass = 'slick-next';
      } else {
        this.selectedPrevClass = 'prev';
        this.selectedNextClass = 'next';
        console.log(this.selectedPrevClass);
      }
     
    });
   }

  ngOnInit(): void {
    this.mockData = slidingCardMockData;
    console.log(this.mockData);
    
  }

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "infinite": true,
    "centerMode": true,
    "arrows": true,
    "variableWidth": true,
    "prevArrow":`<button type='button' class='prev custom-button'></button>`,
    "nextArrow":`<button type='button' class='next custom-button'></button>`
  };
  

  
  
  slickInit(e: any) {
    console.log('slick initialized');
  }
    
  breakpoint(e: any) {
    console.log('breakpoint');
  }
    
  afterChange(e: any) {
    console.log('afterChange');
  }
    
  beforeChange(e: any) {
    console.log('beforeChange');
  }

}
