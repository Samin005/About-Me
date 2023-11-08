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
    ' I\'m a Software Engineer currently working at EllisDon. I\'ve successfully pursued a thesis-based Master\'s of Computer Science degree with Co-operative Education from Carleton University, Canada.' +
    ' Throughout my career I had the privilege to work in full-stack software development and many software frameworks as well as REST APIs. For instance, in regards to front-end development: Angular (TypeScript), VanillaJS (JavaScript) and Flutter (Dart); back-end development: Sprint Boot (Java), Django (Python) and .NET (C#); databases: MySQL, Oracle, PostgreSQL, Firebase and MongoDB.' +
    ' I also have experience in using Test Automation libraries such as JUnit, Cucumber, REST-assured, Selenium, WebdriverIO and have developed projects using Test-Driven Development (TDD) and Behavior-Driven Development (BDD) in an Agile environment.' +
    ' I am an AI enthusiast and worked with different machine learning libraries such as scikit-learn, NumPy, Pandas, joblib, Matplotlib, seaborn and TensorFlow.' +
    ' I also worked as a full-time University Lecturer and taught courses related to Artificial Intelligence, Software Engineering and Data Science.' +
    ' Software Engineering and Machine Learning are my primary interests, and I look forward in utilizing my skills, knowledge and experience in the field of research and practical applications.';
  typedOptions = {
    strings: [this.bio.split('. ').join('.^1000 ')],
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
