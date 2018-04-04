import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var ga: Function;

@Component({
  selector: 'app-hobbies-card',
  templateUrl: './hobbies-card.component.html',
  styleUrls: ['./hobbies-card.component.less']
})
export class HobbiesCardComponent implements OnInit {

  @Input() hobby: String;
  
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
