import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education = [
    {
      timeline: '2021-Present',
      degree: 'MASTER OF COMPUTER SCIENCE',
      institution: 'Carleton University, Canada',
      details: '',
      result: '(In Progress)',
      scale: ''
    },
    {
      timeline: '2014-2018',
      degree: 'BACHELOR IN COMPUTER SCIENCE AND ENGINEERING',
      institution: 'BRAC University, Bangladesh',
      details: '(<b>Minor:</b> English)\n' +
        '<span class="text-decoration-underline">Thesis Title:</span> Using Machine Learning for Lie Detection: Classification of Human Visual Morphology',
      result: 'CGPA: 3.92',
      scale: 'out of 4.00 <div>(WES ICAP course-by-course Evaluated)</div>'
    },
    {
      timeline: '2012-2013',
      degree: 'HSC: SCIENCE DIVISION',
      institution: 'Dhaka College, Bangladesh',
      details: '',
      result: 'GPA: 5.00',
      scale: 'out of 5.00'
    },
    {
      timeline: '2010-2011',
      degree: 'SSC: SCIENCE DIVISION',
      institution: 'Government Laboratory High School, Bangladesh',
      details: '',
      result: 'GPA: 5.00',
      scale: 'out of 5.00'
    }
    // , {timeline: '', degree: '', institution: '', details: '', result: '', scale: ''}
  ];

  constructor() {
    for (const e of this.education) {
      e.details = e.details.split('\n').join('<br>');
    }
  }

  ngOnInit(): void {
  }

}
