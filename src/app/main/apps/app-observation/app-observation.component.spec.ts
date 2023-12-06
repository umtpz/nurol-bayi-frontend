import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppObservationComponent } from './app-observation.component';

describe('AppObservationComponent', () => {
  let component: AppObservationComponent;
  let fixture: ComponentFixture<AppObservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppObservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
