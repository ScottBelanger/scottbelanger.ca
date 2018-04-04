import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { PageScrollConfig } from 'ng2-page-scroll';

declare var ga: Function;

@Component({
  selector: 'app-my-education',
  templateUrl: './my-education.component.html',
  styleUrls: ['./my-education.component.less']
})
export class MyEducationComponent implements OnInit {

  myInterestChapters: string[] = ['Artificial Intelligence', 'Virtual and Augmented Reality', 'Big Data', 
                                  'Internet of Things', 'Renewable Energy', 'Interesting Technology'
                                 ];

  constructor(
    private router: Router
  ) { 
    PageScrollConfig.defaultDuration = 300;

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  ngOnInit() {
  }

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

}
