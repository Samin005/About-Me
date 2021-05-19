import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  publications = [
    {
      title: 'Azhan S., Zaman A.and Bhuiyan M. R. “Using Machine Learning for Lie Detection: Classification of Human Visual Morphology”. BRAC University, 2018.',
      details: 'Though there exists different methods of detecting lies, machine learning can be used to create a reliable and more efficient system to detect lies. This thesis proposes a method of using nonverbal human behaviors to detect lies using machine learning. This lie detection system is based on micro-expressions of human beings which uses Facial Landmark Detection System and Azure Machine Learning. Movements of individual facial muscles are recorded while a person answers some certain questions. By using the two algorithms Two-Class Support Vector Machine and Linear Regression, we attempted to create a machine that can detect lies. We reached an accuracy of approximately 76.2%.',
      showViewButton: true,
      url: 'http://dspace.bracu.ac.bd/xmlui/handle/10361/10144'
    },
    // {title: '', details: '', showViewButton: false, url: ''}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
