import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-babysitter',
  templateUrl: './babysitter.component.html',
  styleUrls: ['./babysitter.component.css'],
})
export class BabysitterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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

  calculatePayment(
    startTime: string,
    endTime: string,
    familyName: string
  ): number {
    return 190;
  }
}
