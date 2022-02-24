import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsString = '● Python\n' +
    '● Django, DRF\n' +
    '● ORM, OOP\n' +
    '● PyQt5, Selenium\n' +
    '● NumPy, Pandas\n' +
    '● scikit-learn, joblib\n' +
    '● Angular 2+\n' +
    '● Typescript, RxJS\n' +
    '● REST API\n' +
    '● Spring Boot\n' +
    '● Matplotlib, seaborn\n' +
    '● JUnit, Cucumber\n' +
    '● Java, JPA\n' +
    '● HTML, CSS\n' +
    '● JSF, JDBC\n' +
    '● JS, jQuery\n' +
    '● Bootstrap\n' +
    '● JWT, OAuth\n' +
    '● Oracle, MySQL\n' +
    '● PostgreSQL\n' +
    '● Firebase\n' +
    '● Raspberry Pi\n' +
    '● TDD, BDD\n' +
    '● Git\n';
  skills = this.skillsString.split('\n');

  constructor() {
  }

  ngOnInit(): void {
  }

}
