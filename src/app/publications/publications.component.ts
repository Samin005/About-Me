import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  publications = [
    {
      title: 'Azhan S. “Automated Generation of Executable Cucumber Scenarios  from an RDBMS Schema”. Carleton University, 2023.',
      details: 'Acceptance testing addresses the user\'s expectations for a software system by using scenarios that capture the interactions of such users with that system. To bridge the technical gap between users and developers when discussing the specification and implementation of such scenarios, BDD tools (e.g., Cucumber) were introduced to allow the creation of user-readable scenarios (feature files in Cucumber) and of the corresponding code to make these scenarios executable (Step Definitions in Cucumber). A Relational Database Management System (RDBMS) models in a schema the constraints and inter-relationships of the entities of a software system. Our goal in this thesis is to propose a systematic approach to automatically generate parameterized and executable Cucumber scenarios based on the schema of a relational database. Generating stories pertaining to application-level concepts and their relationships allow early conversations between developers and stakeholders without relying on technical database notions such as fields, data types, constraints etc. Having such stories generated entails they can be easily regenerated as such conversations allow the iterative development of the database schema of the system and having such stories executable ensures the implementation of the entities and constraints specified in this schema can have a small set of corresponding tests automatically applied to it. We implement our generation process in the specific context of Java systems that use the popular frameworks Spring Boot and MySQL. We hope that our approach can be eventually generalized to other frameworks. We discuss at length our work via 2 case studies.',
      showViewButton: true,
      url: 'https://repository.library.carleton.ca/concern/etds/g158bj30x?locale=en'
    },
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
