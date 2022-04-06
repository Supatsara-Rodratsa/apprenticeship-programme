import { Component, OnInit, Input } from '@angular/core';
import { SubCardModel } from '../../model/model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() details!: SubCardModel;

  constructor() { }

  ngOnInit(): void {
  }

}
