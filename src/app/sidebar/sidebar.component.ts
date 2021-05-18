import {Component, HostListener, OnInit} from '@angular/core';

declare var $;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop(): void {
    console.log(window.pageYOffset);
  }

  navigateToTop(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  navigateToComponent(componentID): void {
    const component = $('#' + componentID);
    console.log('Top Offset: ' + component.offset().top);
    window.scroll({
      top: component.offset().top,
      behavior: 'smooth'
    });
  }

  showUtilitiesCollapseItemsOnSmallScreen(): void {
    if ($('#collapseUtilities').attr('class') === 'collapse') {
      $('#fixedSidebar').css('overflow-y', 'visible');
    } else {
      $('#fixedSidebar').css('overflow-y', 'scroll');
    }
  }

  showComponentsCollapseItemsOnSmallScreen(): void {
    if ($('#collapseTwo').attr('class') === 'collapse') {
      $('#fixedSidebar').css('overflow-y', 'visible');
    } else {
      $('#fixedSidebar').css('overflow-y', 'scroll');
    }
  }

}
