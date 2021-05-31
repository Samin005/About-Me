import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-major-projects',
  templateUrl: './major-projects.component.html',
  styleUrls: ['./major-projects.component.css']
})
export class MajorProjectsComponent implements OnInit {

  majorProjects = [
    {
      title: 'Lie Detection by Facial Expression — (Python, dlib, OpenCV)',
      details: 'Detects the face and 68 facial landmarks in both real-time and in images, and calculates\n' +
        'and records the changes in every 10 milliseconds. This data is later analyzed to\n' +
        'predict if a person was telling the truth or lying.\n',
      showViewButton: true,
      url: 'https://github.com/Samin005/Lie-Detection-Using-Facial-Landmarks'
    },
    {
      title: 'E-commerce & ERP Solution — (Angular, jQuery, Cloud Firestore)',
      details: 'An online store and back-office software solution created using Angular 7, jQuery, RxJs and\n' +
        'multiple javascript libraries such as (chart.js, datatables.net, pdfmake,sweetalert2\n' +
        'etc.) connected with a NoSQL Cloud Firestore back-end. This software includes\n' +
        'social sign-in, add to cart functionalities, profit-loss calculation, role-based user\n' +
        'authentication, Firebase Storage, invoice/financial report generation etc.',
      showViewButton: true,
      url: 'https://samin005.github.io/Store-AF'
    },
    {
      title: 'Tic Tac Toe (AI) — (Angular, Django)',
      details: 'An AI-based tic-tac-toe game where the AI makes the best possible move by using the Minimax Alpha Beta Pruning algorithm.' +
        ' The frontend of the app is created with Angular and backend is created using Django (python). The AI sits in the backend and there is a REST service that makes all the communication possible.' +
        ' The app also has Google sign-in options with proper JWT authentication. After signing in with a Google account, the user is able to see the leaderboard and check current rankings.',
      showViewButton: true,
      url: 'https://samin005.github.io/Tic-Tac-Toe-AI/'
    },
    {
      title: 'Social Account JWT Authentication and Authorization — (Angular, Django)',
      details: 'An application that implements proper JWT authentication and role-based user management system with customizable permissions and data validation. This Frontend is created using Angular which will connects with a Python Django backend using a REST API and an SQL database.',
      showViewButton: true,
      url: 'https://github.com/Samin005/Angular-Django-JWT-Frontend'
    },
    {
      title: 'Admin Panel — (Angular, Cloud Firestore)',
      details: 'An admin panel for Jatra Backoffice software to control and monitor our existing clients. This\n' +
        'admin panel contains role-based user authentication with a Cloud Firestore database\n' +
        'and Angular 6 for the front-end.',
      showViewButton: false,
      url: ''
    },
    {
      title: 'Excel Calculations and Charts Automation — (Python, openpyxl)',
      details: 'A program that detects and reads excel files and automates calculations depending on\n' +
        'requirements and also creates charts in a matter of seconds. Primarily used to relieve\n' +
        'a person from doing boring, lengthy and repetitive excel work.',
      showViewButton: true,
      url: 'https://github.com/Samin005/Python_Automation_Excel'
    },
    {
      title: 'Intruder Detection System — (Python, Raspberry Pi)',
      details: 'A system that uses a Raspberry Pi with a PIR sensor to detect an intruder and take a\n' +
        'picture of the intruder using a Pi cam and send the image via email using smtplib',
      showViewButton: false,
      url: ''
    },
    {
      title: 'Music Recommendation System — (Python, Scikit-learn, Pandas, joblib)',
      details: 'A program that uses Pandas to read and map csv data, uses Scikit-learn to train a machine\n' +
        'learning model and determine its accuracy and uses joblib to save and load the\n' +
        'trained model to be used for predicting user music recommendations depending on\n' +
        'predetermined features mapped in the datasets.',
      showViewButton: true,
      url: 'https://github.com/Samin005/Music_Recomendation_System'
    },
    {
      title: 'IRD (Nepal) API Implementation — (Java, Spring Boot, JPA)',
      details: 'A RESTful service created with Spring Boot, JDBC, JPA and Hibernate for Jatra Backoffice\n' +
        'Software to integrate with the IRD institution of Nepal government.',
      showViewButton: false,
      url: ''
    },
    {
      title: 'Expense-Track — (Angular, Firebase)',
      details: 'An app for people who have a hard time calculating their daily expenses. It supports search by name/date/expense and auto calculation. Angular was used for the front-end and firebase for the back-end.',
      showViewButton: true,
      url: 'https://github.com/Samin005/Expense-Track'
    },
    {
      title: 'Jatra Backoffice Development — (Javascript, JSF, Oracle)',
      details: 'An accounting software for traveling agencies to keep track of their ticketing, invoicing,\n' +
        'package and VISA business. It is created with Java’s JSF framework. Uses\n' +
        'Javascript, Bootstrap and jQuery for front-end and an Oracle database.',
      showViewButton: false,
      url: ''
    },
    {
      title: 'MIR Decoder — (Spring Boot, JPA, Oracle)',
      details: 'An application created with Spring Boot and JPA Repository, that can decode specific\n' +
        'information from an MIR file generated by the universal Galileo Travelport software\n' +
        'and insert into the Oracle database of Jatra Backoffice Software.',
      showViewButton: true,
      url: 'https://github.com/Samin005/MIR_Decoder'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}