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
    const familyConfig = this.getFamilyConfigByName(familyName);
    let payment = 0;
    if (familyConfig.hasOwnProperty('specialRate')) {
      const hoursWorked: Array<number> = [];
      for (
        let i = 0;
        i < this.getDifferenceBetweenTimes(startTime, endTime);
        i++
      ) {
        hoursWorked.push(this.getHoursFromTimeString(startTime) + i);
      }
      hoursWorked.forEach((hour) => {
        if (hour < this.getHoursFromTimeString(familyConfig.bedTime)) {
          payment += familyConfig.hourlyRateBeforeBedTime;
        } else if (
          familyConfig.specialRate &&
          hour >=
            this.getHoursFromTimeString(familyConfig.specialRate.startTime) &&
          hour < this.getHoursFromTimeString(familyConfig.specialRate.endTime)
        ) {
          payment += familyConfig.specialRate.rate;
        } else if (hour > this.getHoursFromTimeString(familyConfig.bedTime)) {
          payment += familyConfig.hourlyRateAfterBedTime;
        }
      });
    } else {
      const paymentBeforeBedTime = this.getPaymentBetweenTimes(
        startTime,
        familyConfig.bedTime,
        familyConfig.hourlyRateBeforeBedTime
      );
      const paymentAfterBedTime = this.getPaymentBetweenTimes(
        familyConfig.bedTime,
        endTime,
        familyConfig.hourlyRateAfterBedTime
      );
      payment = paymentBeforeBedTime + paymentAfterBedTime;
    }
    console.log('payment', payment);
    return payment;
  }

  getFamilyConfigByName(familyName: string): FamilyEmployer {
    return this.FAMILY_CONFIG.filter((family) => family.name === familyName)[0];
  }

  getPaymentBetweenTimes(
    startTime: string,
    endTime: string,
    rate: number
  ): number {
    return this.getDifferenceBetweenTimes(startTime, endTime) * rate;
  }

  getDifferenceBetweenTimes(startTime: string, endTime: string): number {
    return (
      this.getHoursFromTimeString(endTime) -
      this.getHoursFromTimeString(startTime)
    );
  }

  getHoursFromTimeString(time: string): number {
    let hours = parseInt(time, 10);
    if (time.indexOf('AM') > -1 && hours !== 12) {
      hours += 12;
    }
    return hours;
  }
}
