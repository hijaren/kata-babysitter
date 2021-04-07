import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabysitterComponent } from './babysitter.component';
import { FamilyEmployer } from './shared/familyEmployer.model';

describe('BabysitterComponent', () => {
  let component: BabysitterComponent;
  let fixture: ComponentFixture<BabysitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BabysitterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabysitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the correct payment for one full night for a family without a SpecialFamilyRate', () => {
    const family: FamilyEmployer = {
      id: 1,
      name: 'Family A',
      bedTime: '11PM',
      hourlyRateBeforeBedTime: 15,
      hourlyRateAfterBedTime: 20,
    };
    expect(component.calculatePayment('5PM', '4AM', 'Family A')).toEqual(190);
  });
});
