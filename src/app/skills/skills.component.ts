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
    '● scikit-learn, joblib\n' +
    '● Angular 2+\n' +
    '● Typescript, RxJS\n' +
    '● Java, JPA\n' +
    '● Spring Boot\n' +
    '● seaborn\n' +
    '● Matplotlib\n' +
    '● REST\n' +
    '● HTML, CSS\n' +
    '● Javascript\n' +
    '● jQuery\n' +
    '● Bootstrap\n' +
    '● JWT\n' +
    '● Oracle, MySQL\n' +
    '● PostgreSQL\n' +
    '● Firebase\n' +
    '● Raspberry Pi\n' +
    '● Arduino\n' +
    '● Git\n';
  skills = this.skillsString.split('\n');

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.skills.length);
  }

}
