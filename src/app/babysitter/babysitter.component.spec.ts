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
    let family: FamilyEmployer = {
      id: 0,
      name: '',
      bedTime: '',
      hourlyRateBeforeBedTime: 0,
      hourlyRateAfterBedTime: 0,
    };

    family = {
      id: 1,
      name: 'Family A',
      bedTime: '11PM',
      hourlyRateBeforeBedTime: 15,
      hourlyRateAfterBedTime: 20,
    };
    expect(component.calculatePayment('5PM', '4AM', 'Family A')).toEqual(190);

    family = {
      id: 3,
      name: 'Family C',
      bedTime: '9PM',
      hourlyRateBeforeBedTime: 21,
      hourlyRateAfterBedTime: 15,
    };
    expect(component.calculatePayment('5PM', '4AM', 'Family C')).toEqual(189);
  });

  it('should calculate the correct payment for partial nights for a family without a SpecialFamilyRate', () => {
    const family: FamilyEmployer = {
      id: 1,
      name: 'Family A',
      bedTime: '11PM',
      hourlyRateBeforeBedTime: 15,
      hourlyRateAfterBedTime: 20,
    };
    expect(component.calculatePayment('5PM', '11PM', 'Family A')).toEqual(90);
    expect(component.calculatePayment('11PM', '4AM', 'Family A')).toEqual(100);
    expect(component.calculatePayment('10PM', '2AM', 'Family A')).toEqual(75);
  });

  it('should calculate the correct payment for one full night for a family with a SpecialFamilyRate', () => {
    const family: FamilyEmployer = {
      id: 2,
      name: 'Family B',
      bedTime: '10PM',
      hourlyRateBeforeBedTime: 12,
      hourlyRateAfterBedTime: 16,
      specialRate: {
        startTime: '10PM',
        endTime: '12AM',
        rate: 8,
      },
    };
    expect(component.calculatePayment('5PM', '4AM', 'Family B')).toEqual(140);
  });

  it('should calculate the correct payment for partial nights for a family with a SpecialFamilyRate', () => {
    const family: FamilyEmployer = {
      id: 2,
      name: 'Family B',
      bedTime: '10PM',
      hourlyRateBeforeBedTime: 12,
      hourlyRateAfterBedTime: 16,
      specialRate: {
        startTime: '10PM',
        endTime: '12AM',
        rate: 8,
      },
    };
    expect(component.calculatePayment('5PM', '10PM', 'Family B')).toEqual(60);
    expect(component.calculatePayment('10PM', '12AM', 'Family B')).toEqual(16);
    expect(component.calculatePayment('10PM', '4AM', 'Family B')).toEqual(80);
    expect(component.calculatePayment('12AM', '4AM', 'Family B')).toEqual(64);
  });

  it('should calculate the difference between a start and an end time', () => {
    let startTime = '';
    let endTime = '';

    startTime = '5PM';
    endTime = '4AM';
    expect(component.getDifferenceBetweenTimes(startTime, endTime)).toEqual(11);

    startTime = '11PM';
    endTime = '12AM';
    expect(component.getDifferenceBetweenTimes(startTime, endTime)).toEqual(1);

    startTime = '12AM';
    endTime = '1AM';
    expect(component.getDifferenceBetweenTimes(startTime, endTime)).toEqual(1);

    startTime = '1AM';
    endTime = '4AM';
    expect(component.getDifferenceBetweenTimes(startTime, endTime)).toEqual(3);
  });

  it('should convert a time string to a number value', () => {
    let time = '';

    time = '5PM';
    expect(component.getHoursFromTimeString(time)).toEqual(5);

    time = '12AM';
    expect(component.getHoursFromTimeString(time)).toEqual(12);

    time = '4AM';
    expect(component.getHoursFromTimeString(time)).toEqual(16);
  });
});
