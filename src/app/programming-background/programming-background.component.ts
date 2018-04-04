import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var ga: Function;

@Component({
  selector: 'app-programming-background',
  templateUrl: './programming-background.component.html',
  styleUrls: ['./programming-background.component.less']
})
export class ProgrammingBackgroundComponent implements OnInit {

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
  }

}
