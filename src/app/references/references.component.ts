import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  references = [
    {
      name: 'Dr. Mahbub Majumdar',
      info: 'Professor and Dean\n' +
        'Department of Computer Science and Engineering,\n' +
        'BRAC University\n' +
        '+8804478444060\n' +
        'majumdar@bracu.ac.bd\n',
      img: 'assets/img/references/mahbub-majumdar.png',
      showViewButton: true,
      url: 'https://www.bracu.ac.bd/about/people/mahbubul-alam-majumdar-phd'
    },
    {
      name: 'Mr. Moin Mostakim',
      info: 'Lecturer\n' +
        'Department of Computer Science and Engineering,\n' +
        'BRAC University\n' +
        '+8804478444060\n' +
        'mostakim@bracu.ac.bd',
      img: 'assets/img/references/moin-mostakim.jfif',
      showViewButton: true,
      url: 'https://www.bracu.ac.bd/about/people/moin-mostakim'
    },
    {
      name: 'Dr. Md. Ashraful Alam',
      info: 'Assistant Professor\n' +
        'Department of Computer Science and Engineering,\n' +
        'BRAC University\n' +
        '+8809617445149\n' +
        'ashraful.alam@bracu.ac.bd',
      img: 'assets/img/references/ashraful-alam.png',
      showViewButton: true,
      url: 'https://www.bracu.ac.bd/about/people/md-ashraful-alam-phd'
    },
    {
      name: 'Dr. Sadia Kazi',
      info: 'Chairperson and Associate Professor\n' +
        'Department of Computer Science and Engineering,\n' +
        'BRAC University\n' +
        '+8809617445141\n' +
        'skazi@bracu.ac.bd',
      img: 'assets/img/references/sadia-kazi.png',
      showViewButton: true,
      url: 'https://www.bracu.ac.bd/about/people/sadia-hamid-kazi'
    },
    {
      name: 'Dr. Jean-Pierre Corriveau',
      info: 'Associate Professor\n' +
        'School of Computer Science,\n' +
        'Carleton University\n' +
        '+1613-520-2600\n' +
        'jeanpier@scs.carleton.ca',
      img: 'assets/img/references/jean-pierre.png',
      showViewButton: true,
      url: 'https://carleton.ca/scs/people/jean-pierre-corriveau/'
    },
    // {name: '', info: '', img: '', showViewButton: false, url: ''},
  ];

  constructor() {
    for (const r of this.references) {
      r.info = r.info.split('\n').join('<br>');
    }
  }

  ngOnInit(): void {
  }

}
