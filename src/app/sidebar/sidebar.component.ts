import {Component, HostListener, OnInit} from '@angular/core';

declare var $;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  activated = 'bio';

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop(): void {
    const bioYOffset = $('#bio').offset().top;
    const educationYOffset = $('#education').offset().top;
    const skillsYOffset = $('#skills').offset().top;
    const workExperienceYOffset = $('#work-experience').offset().top;
    const majorProjectsYOffset = $('#major-projects').offset().top;

    if (window.pageYOffset >= bioYOffset && window.pageYOffset < educationYOffset) {
      this.activated = 'bio';
    } else if (window.pageYOffset >= educationYOffset && window.pageYOffset < skillsYOffset) {
      this.activated = 'education';
    } else if (window.pageYOffset >= skillsYOffset && window.pageYOffset < workExperienceYOffset) {
      this.activated = 'skills';
    } else if (window.pageYOffset >= workExperienceYOffset && window.pageYOffset < majorProjectsYOffset) {
      this.activated = 'work-experience';
    }
  }

  navigateToTop(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  navigateToComponent(componentID): void {
    const component = $('#' + componentID);
    window.scroll({
      top: component.offset().top,
      behavior: 'smooth'
    });
  }
}
