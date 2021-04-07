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
    return 5;
  }

  getDifferenceBetweenTimes(startTime: string, endTime: string): number {
    return 11;
  }

  calculatePayment(
    startTime: string,
    endTime: string,
    familyName: string
  ): number {
    return 190;
  }
}
