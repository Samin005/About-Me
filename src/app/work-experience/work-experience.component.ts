import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience = [
    {
      timeline: 'January 2020 -' +
        'Present',
      title: 'BRAC UNIVERSITY — Lecturer',
      details: '● Prepare and deliver lectures, tutorials and online resources\n' +
        '● Redesign courses and curriculums to match current demands\n' +
        '● Courses taken: CSE422: Artificial Intelligence, CSE470: Software ' +
        'Engineering, CSE471: System Analysis and Design, CSE161: Computer ' +
        'Programming, CSE101: Introduction to Computer Science etc.'
    },
    {
      timeline: 'May, 2018 -' +
        'January 2020\n',
      title: 'MGH GROUP — Software Engineer',
      details: '● Provide full lifecycle support from initial client requirements analysis through ' +
        'design, coding, testing, debugging, integration and implementation.\n' +
        '● Implement REST APIs and improve performance\n' +
        '● Add new features, fix existing bugs and provide technical support'
    },
    {
      timeline: 'June 2016 -' +
        'December 2017',
      title: 'BRAC UNIVERSITY — Teaching Assistant',
      details: '● Solve quiz and exam questions for CSE221: Algorithms\n' +
        '● Take classes explaining difficult algorithms and data structures\n' +
        '● Provide consultation and help students with coding and lab work'
    }
  ];

  constructor() {
    for (const w of this.workExperience) {
      w.details = w.details.split('\n').join('<br>');
    }
    console.log(this.workExperience);
  }

  ngOnInit(): void {
  }

}
