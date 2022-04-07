import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomStickyBarComponent } from './bottom-sticky-bar.component';

describe('BottomStickyBarComponent', () => {
  let component: BottomStickyBarComponent;
  let fixture: ComponentFixture<BottomStickyBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomStickyBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomStickyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
