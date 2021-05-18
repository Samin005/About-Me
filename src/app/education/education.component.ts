import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education = [
    {
      timeline: '2014-2018', details: 'BACHELOR IN COMPUTER SCIENCE AND ENGINEERING\n' +
        'BRAC University\n' +
        '(Minor: English)\n' +
        'Thesis Title: Using Machine Learning for Lie Detection:\n' +
        'Classification of Human Visual Morphology', result: 'CGPA: 3.87\n' +
        'out of 4.00'
    },
    {
      timeline: '2012-2013', details: 'HSC: SCIENCE DIVISION\n' +
        'Dhaka College', result: 'GPA: 5.00\n' +
        'out of 5.00'
    },
    {
      timeline: '2010-2011', details: 'SSC: SCIENCE DIVISION\n' +
        'Government Laboratory High School', result: 'GPA: 5.00\n' +
        'out of 5.00'
    }
  ];

  constructor() {
    for (const e of this.education) {
      e.details = e.details.split('\n').join('<br>');
      e.result = e.result.split('\n').join('<br>');
    }
  }

  ngOnInit(): void {
  }

}
