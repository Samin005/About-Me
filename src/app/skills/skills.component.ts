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
    '● PyQt5\n' +
    '● NumPy, Pandas\n' +
    '● Angular 2+\n' +
    '● Typescript, RxJS\n' +
    '● Java, JPA\n' +
    '● Spring Boot\n' +
    '● scikit-learn, joblib\n' +
    '● REST\n' +
    '● HTML, CSS\n' +
    '● JS, jQuery\n' +
    '● JWT\n' +
    '● seaborn\n' +
    '● Oracle, MySQL\n' +
    '● PostgreSQL\n' +
    '● Firebase\n' +
    '● Git\n' +
    '● Matplotlib';
  skills = this.skillsString.split('\n');

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.skills.length);
  }

}
