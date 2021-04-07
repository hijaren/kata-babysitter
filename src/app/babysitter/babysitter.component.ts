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

  ngOnInit(): void {
    this.calculatePayment('12AM', '4AM', 'Family B');
  }

  calculatePayment(
    startTime: string,
    endTime: string,
    familyName: string
  ): number {
    const familyConfig = this.getFamilyConfigByName(familyName);
    let payment = 0;
    if (familyConfig.specialRate) {
      const paymentBeforeBedTime = this.getPaymentBetweenTimes(
        startTime,
        familyConfig.bedTime,
        familyConfig.hourlyRateBeforeBedTime
      );
      const specialRatePayment = this.getPaymentBetweenTimes(
        familyConfig.specialRate.startTime,
        familyConfig.specialRate.endTime,
        familyConfig.specialRate.rate
      );
      const paymentAfterBedTime = this.getPaymentBetweenTimes(
        familyConfig.specialRate.endTime,
        endTime,
        familyConfig.hourlyRateAfterBedTime
      );
      console.log('before', paymentBeforeBedTime);
      console.log('special', specialRatePayment);
      console.log('after', paymentAfterBedTime);
      payment = paymentBeforeBedTime + specialRatePayment + paymentAfterBedTime;
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
