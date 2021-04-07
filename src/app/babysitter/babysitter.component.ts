import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-babysitter',
  templateUrl: './babysitter.component.html',
  styleUrls: ['./babysitter.component.css'],
})
export class BabysitterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  calculatePayment(
    startTime: string,
    endTime: string,
    familyName: string
  ): number {
    return 190;
  }
}
