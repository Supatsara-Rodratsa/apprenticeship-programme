import { Component, Input, OnInit } from '@angular/core';
import { AnimationEvent } from "@angular/animations";
import { fade, slide, listAnimation, slideInOut } from "./antimation";
import { ToggleModel } from '../../model/model';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
  animations: [fade, slide, listAnimation, slideInOut]
})
export class ToggleComponent implements OnInit {

  animationState = "out";

  @Input() item!: ToggleModel;
  @Input() currentIndex: number = 0;
  @Input() lengthItem: number = 0;

  showTopBorder: boolean = false;
  showBottomBorder: boolean = false;
  toggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.lengthItem > 1) {
      if (this.currentIndex == 0) { 
        this.showTopBorder = true;
        this.showBottomBorder = true;
      }
      else if (this.currentIndex == this.lengthItem - 1) this.showBottomBorder = true;
    } else {
      this.showTopBorder = true;
      this.showBottomBorder = true;
    }
  }

  onClicked() {
    this.toggle = !this.toggle;
    console.log(this.animationState);
    this.animationState = this.animationState === "out" ? "in" : "out";
    console.log(this.animationState);
  }

}
