import { Component, Input, OnInit } from '@angular/core';
import { SlidingCardModel } from '../../model/model';

@Component({
  selector: 'app-slide-card',
  templateUrl: './slide-card.component.html',
  styleUrls: ['./slide-card.component.css']
})
export class SlideCardComponent implements OnInit {

  @Input() item!: SlidingCardModel;

  constructor() { }

  ngOnInit(): void {
  }

}
