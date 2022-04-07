import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingSectionComponent } from './sliding-section.component';

describe('SlidingSectionComponent', () => {
  let component: SlidingSectionComponent;
  let fixture: ComponentFixture<SlidingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
