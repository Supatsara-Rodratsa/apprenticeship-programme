import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticeshipScreenComponent } from './apprenticeship-screen.component';

describe('ApprenticeshipScreenComponent', () => {
  let component: ApprenticeshipScreenComponent;
  let fixture: ComponentFixture<ApprenticeshipScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprenticeshipScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenticeshipScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
