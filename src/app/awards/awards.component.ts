import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  awardsString = '● Received Teaching Assistantship and Department Scholarship worth $26,122 CAD (Carleton University)\n' +
    '● Secured a position in both VC’s list and Dean’s list for outstanding results (BRAC University)\n' +
    '● Performance Based Scholarship for 9 semesters (BRAC University)\n' +
    '● Promoted to Senior Executive in 5 months for tremendous work progress (MGH Group)\n' +
    '● Final Round (Top 15 out of 650 teams) EATL Apps Contest 2016-17\n' +
    '● 9th place in ACM Programming Contest BRAC University 2016\n' +
    '● Other Participations: National Hackathon 2016, Tech for Peace 2017, Stage Drama Jane Austen 200 ULAB, HackBackPack 2017';
  awards = this.awardsString.split('\n');

  constructor() {
  }

  ngOnInit(): void {
  }

}
