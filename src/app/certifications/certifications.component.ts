import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  certifications = [
    {
      title: 'Kaggle certified Intro to Machine Learning',
      img: 'assets/img/certifications/Samin%20Azhan%20-%20Intro%20to%20Machine%20Learning.png',
      showViewButton: true,
      url: 'https://www.kaggle.com/learn/certification/saminazhan/intro-to-machine-learning'
    },
    // {title: '', img: '', showViewButton: false, url: ''}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
