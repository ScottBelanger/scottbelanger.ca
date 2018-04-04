import { Component, OnInit, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;
declare var ga: Function;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less',
              './home-page-hexgrid.component.less'
             ]
})
export class HomePageComponent implements OnInit {

  showHeader: string = "hide";
  constructor(
    private router: Router
  ) { 
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  ngOnInit() {
    $(document).ready(function() {
      $(".trigger").click(function() {
        $(".menu").toggleClass("active"); 
      });
    });

  }

  

  @HostListener("window:scroll", []) 
  onWindowScroll() {
    //For Chrome
    let yOffset = window.scrollY;
    //For IE and Mozilla
    let yOffset2 = document.documentElement.scrollTop;

    if(yOffset > 550 || yOffset2 > 550) {
      document.getElementById("navbarSolid").style.position = "fixed";
      this.showHeader = "show";
    }

    else {
      document.getElementById("navbarSolid").style.position = "absolute";
      this.showHeader = "hide";
    }
  }

  gotoInteractiveMap() {
    this.router.navigate(['/interactivemap']);
  }

  gotoProgrammingBackground() {
    this.router.navigate(['/programmingbackground']);
  }

  gotoMyPhotos() {
    this.router.navigate(['/photos']);
  }

  gotoMyHobbies() {
    this.router.navigate(['/hobbies']);
  }

  gotoMyEducation() {
    this.router.navigate(['/education']);
  }

  gotoAboutMe() {
    this.router.navigate(['/aboutme']);
  }

}
