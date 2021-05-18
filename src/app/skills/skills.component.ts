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
    '● Machine Learning\n' +
    '● Angular 2+\n' +
    '● Typescript, RxJS\n' +
    '● Java, JPA\n' +
    '● Spring Boot\n' +
    '● REST\n' +
    '● HTML, CSS\n' +
    '● JS, jQuery\n' +
    '● JWT\n' +
    '● Oracle, MySQL\n' +
    '● PostgreSQL\n' +
    '● Firebase\n' +
    '● Git';
  skills = this.skillsString.split('\n');

  constructor() {
  }

  ngOnInit(): void {
  }

}
