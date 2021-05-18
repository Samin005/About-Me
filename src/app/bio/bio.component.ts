import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  bio = 'Hi there, my name is Samin Azhan.' +
    ' I\'m currently working as a lecturer in BRAC University, Bangladesh.' +
    ' I usually teach courses related Artificial Intelligence and Computer Science in my university.' +
    ' Previously I worked as a Full-stack Software Engineer in one of the largest private groups in Bangladesh.' +
    ' AI and Software Engineering are my primary interests, and I look forward to sharing my ideas.';

  constructor() {
  }

  ngOnInit(): void {
  }

}
