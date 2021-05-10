import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedHousesCardContainerComponent } from './visited-houses-card-container.component';

describe('VisitedHousesCardContainerComponent', () => {
  let component: VisitedHousesCardContainerComponent;
  let fixture: ComponentFixture<VisitedHousesCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitedHousesCardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitedHousesCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
