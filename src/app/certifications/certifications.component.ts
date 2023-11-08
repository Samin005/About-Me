import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  certifications = [
    {
      title: 'Udemy certified Principles of Secure Coding',
      img: 'assets/img/certifications/udemy-principles-of-secure -coding.jpg',
      showViewButton: true,
      url: 'https://drive.google.com/file/d/1VoLyTAaMHPsaTya5nYzVZn0FZJw7moC0/view?usp=sharing'
    },
    {
      title: 'Udemy certified Secure Product Lifecycle 101 Course',
      img: 'assets/img/certifications/udemy-secure-product-lifecycle-101.jpg',
      showViewButton: true,
      url: 'https://drive.google.com/file/d/18tEV2rdNZLwX_Xc7IzuvKYabi4uuNMvK/view?usp=sharing'
    },
    {
      title: 'Google certified Google Analytics Course',
      img: 'assets/img/certifications/Google-Analytics-Course-Certificate.jpg',
      showViewButton: true,
      url: 'https://analytics.google.com/analytics/academy/certificate/k0xz_ojsSGS-EtPV5fH0jw'
    },
    {
      title: 'Kaggle certified Intermediate Machine Learning',
      img: 'assets/img/certifications/Samin%20Azhan%20-%20Intermediate%20Machine%20Learning.png',
      showViewButton: true,
      url: 'https://www.kaggle.com/learn/certification/saminazhan/intermediate-machine-learning'
    },
    {
      title: 'HackerRank certified Problem Solver',
      img: 'assets/img/certifications/hackerrank-problem-solver-basic.png',
      showViewButton: true,
      url: 'https://www.hackerrank.com/certificates/0758de5cdc48'
    },
    {
      title: 'Kaggle certified Intro to Machine Learning',
      img: 'assets/img/certifications/Samin%20Azhan%20-%20Intro%20to%20Machine%20Learning.png',
      showViewButton: true,
      url: 'https://www.kaggle.com/learn/certification/saminazhan/intro-to-machine-learning'
    },
    {
      title: 'Mozilla Certified Boot Camp (Prime Minister\'s Office, Bangladesh)',
      img: 'assets/img/certifications/mozilla.jpg',
      showViewButton: true,
      url: 'https://drive.google.com/file/d/1dREVj_mKlc-Y_lzptCpeHCvbvXS1js7V/view?usp=sharing'
    },
    {
      title: 'ICT Certified Nation Hackathon, Bangladesh',
      img: 'assets/img/certifications/national-hackathon.jpg',
      showViewButton: true,
      url: 'https://drive.google.com/file/d/10IeitZ5xbW7FLpgP-lOHCbThnHD3MGD7/view?usp=sharing'
    },
    {
      title: 'EATL-Prothom Alo Apps Contest (Top 15 out of 650 teams)',
      img: 'assets/img/certifications/eatl-apps.jpg',
      showViewButton: true,
      url: 'https://drive.google.com/file/d/1TKtK0CS9xkAcGkxwDS14-T6jk0hr2Qw6/view?usp=sharing'
    },
    {
      title: 'Tech for Peace Certified Hack Day',
      img: 'assets/img/certifications/tech-for-peace.jpg',
      showViewButton: true,
      url: 'https://drive.google.com/file/d/1FffxJ5i1zUzBYv0yIbrdqYosuyKT130y/view?usp=sharing'
    },
    {
      title: 'BINUS University Certified Asian English Olympics',
      img: 'assets/img/certifications/aeo-english-olympics.jpg',
      showViewButton: true,
      url: 'https://drive.google.com/file/d/1YVfME558AsxbM6jZ1tUg_34QgzVmLSVw/view?usp=sharing'
    },
    {
      title: 'ULAB Certified Inter-university Cultural Competition',
      img: 'assets/img/certifications/ulab-stage-drama.jpg',
      showViewButton: true,
      url: 'https://drive.google.com/file/d/1WpGD1TXWT0qGUbLxCMUqpG0SXEZEWpFm/view?usp=sharing'
    },
    {
      title: 'BRAC University Certified English Singing',
      img: 'assets/img/certifications/brac-english-singing.jpg',
      showViewButton: true,
      url: 'https://drive.google.com/file/d/1dOv1z-V8gCIjQcdBupeRL2KovEWF5A1X/view?usp=sharing'
    },
    {
      title: 'British Council Certified General English Speaker (Independent User)',
      img: 'assets/img/certifications/british-council.jpg',
      showViewButton: true,
      url: 'https://drive.google.com/file/d/16FMtxaSUalEK24Am1jLBp2NY_DYr26O-/view?usp=sharing'
    },
    // {title: '', img: '', showViewButton: false, url: ''}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
