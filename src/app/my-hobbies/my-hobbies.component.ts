import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { KeysPipe } from '../pipes/object-key-pipe';

declare var ga: Function;

@Component({
  selector: 'app-my-hobbies',
  templateUrl: './my-hobbies.component.html',
  styleUrls: ['./my-hobbies.component.less']
})
export class MyHobbiesComponent implements OnInit {

  hobbies: String [] = ["Travel", "Sports", "Games", "Languages", "Reading", "Puzzles", "Scuba-Diving", "Technologies" ];

  hobbiesInfo: any = {
    "Travel" : "I am an avid traveler and recently spent 5 months in Europe, where I travelled to 23 different countries. In total, I have been to 30+ countries and hope to visit Japan, South Korea, Taiwan, and the Phillipines in the future.",
    "Sports" : "I am highly active and enjoy getting involved in organized sports or just doing my own thing. I play several sports including soccer, volleyball, swimming and boxing.",
    "Games" : "I am very passionate about video games. My favorite genres include RPGs, first-person shooters, and strategy games. I am a big fan of Blizzard Entertainment games and have been since the early 2000s.",
    "Languages" : "English is my primary language, however, I also possess basic fluency in German and hope to learn Mandarin next.",
    "Reading" : "My favourite genres to read are science fiction and biographies. I most recently finished Elon Musk's biography and am currently reading The 7 Habits of Highly Effective People.",
    "Puzzles" : "I have always enjoyed puzzles and try to do several sudokus a day to keep my mind sharp.",
    "Scuba-Diving" : "I obtained my PADI certification during my time in Thailand, and have since been scuba diving in Cozumel, Mexico, and The Dominican Republic.",
    "Technologies" : "I love to get involved with new technologies and enjoy continuously learning more about everything that can be done with the latest tech."
  };
  
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
