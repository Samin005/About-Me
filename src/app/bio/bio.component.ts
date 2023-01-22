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
    ' I\'m a Full-stack Software Engineer who is currently pursuing a Master\'s degree at Carleton University, Canada.' +
    ' I am experienced in working with Software Development frameworks such as Angular (TypeScript), VanillaJS (JavaScript) and Flutter (Dart) for front-end; Sprint Boot (Java), Django (Python) and .NET (C#) for back-end; databases such as MySQL, Oracle, PostgreSQL, Firebase and MongoDB; as well as REST APIs.' +
    ' I also have experience in using Test Automation libraries such as JUnit, Cucumber, REST-assured, Selenium, WebdriverIO and have developed projects using Test-Driven Development (TDD) and Behavior-Driven Development (BDD) in an Agile environment.' +
    ' I am an AI enthusiast and worked with different machine learning libraries such as scikit-learn, NumPy, Pandas, joblib, Matplotlib, seaborn and TensorFlow.' +
    ' I also worked as a full-time University Lecturer and taught courses related with Artificial Intelligence, Software Engineering and Data Science.' +
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
