import { Component, OnInit } from '@angular/core';
import { FamilyEmployer } from './shared/familyEmployer.model';

@Component({
  selector: 'app-babysitter',
  templateUrl: './babysitter.component.html',
  styleUrls: ['./babysitter.component.css'],
})
export class BabysitterComponent implements OnInit {
  FAMILY_CONFIG: Array<FamilyEmployer> = [
    {
      id: 1,
      name: 'Family A',
      bedTime: '11PM',
      hourlyRateBeforeBedTime: 15,
      hourlyRateAfterBedTime: 20,
    },
    {
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
    },
    {
      id: 3,
      name: 'Family C',
      bedTime: '9PM',
      hourlyRateBeforeBedTime: 21,
      hourlyRateAfterBedTime: 15,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  calculatePayment(
    startTime: string,
    endTime: string,
    familyName: string
  ): number {
    return 190;
  }

  getPaymentBetweenTimes(
    startTime: string,
    endTime: string,
    rate: number
  ): number {
    return this.getDifferenceBetweenTimes(startTime, endTime) * rate;
  }

  getHoursFromTimeString(time: string): number {
    let hours = parseInt(time, 10);
    if (time.indexOf('AM') > -1 && hours !== 12) {
      hours += 12;
    }
    return hours;
  }

  getDifferenceBetweenTimes(startTime: string, endTime: string): number {
    return (
      this.getHoursFromTimeString(endTime) -
      this.getHoursFromTimeString(startTime)
    );
  }
}
