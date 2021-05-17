import {Component, OnInit} from '@angular/core';

declare var $;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() {
    $('#sidebarToggleTop').on('click', () => {
      $('body').toggleClass('sidebar-toggled');
      $('.sidebar').toggleClass('toggled');
      $('#fixedSidebar').toggleClass('position-sticky');
      if ($('.sidebar').hasClass('toggled')) {
        $('.sidebar .collapse').collapse('hide');
      }
    });
    $('#sidebarToggle').on('click', () => {
      $('body').toggleClass('sidebar-toggled');
      $('.sidebar').toggleClass('toggled');
      if ($('.sidebar').hasClass('toggled')) {
        $('.sidebar .collapse').collapse('hide');
      }
    });
  }

  ngOnInit(): void {
  }

  navigateToTop(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  navigateToColors(): void {
    window.scroll({
      top: $('#colorsContainer').offset().top,
      behavior: 'smooth'
    });
  }

  scrollDown(): void {
    window.scroll({
      top: 500,
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
