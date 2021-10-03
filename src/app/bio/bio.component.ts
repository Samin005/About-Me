import {Component, OnInit} from '@angular/core';
import Typed from 'typed.js';

declare var $: any;

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  bio = 'Hi there, my name is Samin Azhan.' +
    ' I\'m a lecturer in the Computer Science and Engineering department of BRAC University, Bangladesh.' +
    ' I usually teach courses related with Artificial Intelligence, Software Engineering and Data Science in my university.' +
    ' Previously I worked as a Full-stack Software Engineer in one of the largest private companies in the country.' +
    ' AI and Software Engineering are my primary interests, and I look forward in utilizing my skills, knowledge and experience in the field of research and practical applications.';
  typedOptions = {
    strings: [this.bio.split('.').join('.^1000')],
    typeSpeed: 20,
    backSpeed: 5,
    backDelay: 300000,
    showCursor: true,
    cursorChar: '_',
    loop: true
  };

  constructor() {
  }

  ngOnInit(): void {
    $('[data-toggle="tooltip"]').tooltip();
    const typedBio = new Typed('#typed-bio', this.typedOptions);
    typedBio.start();
  }

}
