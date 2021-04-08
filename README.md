# KataBabysitter

This is a Kata to demonstrate my understanding of Test Driven Development (TDD), clean code, & software craftsmanship. Created using Angular w/ Typescript.

## Screenshots
- UI: https://github.com/hijaren/kata-babysitter/blob/master/basic%20ui.png
- Code Coverage: https://github.com/hijaren/kata-babysitter/blob/master/code%20coverage.png

## Setup

To run application locally:
1. Install NPM package manager (https://www.npmjs.com/get-npm)
2. Run `npm install -g @angular/cli` to install Angular CLI
3. Clone repository / download zipped file
4. Open with IDE (ex: VS Code)
5. Run `npm install` to install dependencies
6. Run `ng serve --open` to run & open development server

Other commands:
- Run `ng test` to execute unit tests
- Run `ng test --code-coverage` to update code coverage file

## Requirements

_As a babysitter
In order to get paid for 1 night of work
I want to calculate my nightly charge_

The babysitter:
- starts no earlier than 5:00PM
- leaves no later than 4:00AM
- only babysits for one family per night
- gets paid for full hours (no fractional hours)
- should be prevented from mistakes when entering times (e.g. end time before start time, or outside of allowable work hours)

The job:
- Pays different rates for each family (based on bedtimes, kids and pets, etc...)
- Family A pays $15 per hour before 11pm, and $20 per hour the rest of the night
- Family B pays $12 per hour before 10pm, $8 between 10 and 12, and $16 the rest of the night
- Family C pays $21 per hour before 9pm, then $15 the rest of the night
- The time ranges are the same as the babysitter (5pm through 4am)

Deliverable:
- Calculate total pay, based on babysitter start and end time, and a family.

The Kata does not require a User Interface of any kind—just the library code and the tests that show how you used TDD to develop that code.
