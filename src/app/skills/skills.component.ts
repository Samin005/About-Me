import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsString = '● Java, JPA\n' +
    '● Spring Boot\n' +
    '● REST API\n' +
    '● JSF, JDBC, Allure\n' +
    '● JUnit, Cucumber\n' +
    '● ORM, OOP\n' +
    '● Angular 2+\n' +
    '● Typescript, RxJS\n' +
    '● HTML, CSS, JS\n' +
    '● Bootstrap, jQuery\n' +
    '● Docker, AWS\n' +
    '● JWT, OAuth\n' +
    '● Python\n' +
    '● Django, DRF\n' +
    '● NumPy, Pandas\n' +
    '● scikit-learn, joblib\n' +
    '● Matplotlib, seaborn\n' +
    '● PyQt5, Selenium\n' +
    '● Oracle, MySQL\n' +
    '● PostgreSQL\n' +
    '● Firebase\n' +
    '● MongoDB\n' +
    '● TDD, BDD\n' +
    '● Git, CI/CD';
  skills = this.skillsString.split('\n');

  constructor() {
  }

  ngOnInit(): void {
  }

}
