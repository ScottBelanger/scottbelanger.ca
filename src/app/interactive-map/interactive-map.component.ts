import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

declare let $: any;
declare var ga: Function;

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.less']
})

export class InteractiveMapComponent implements OnInit {

  countrySelected: string = "Canada";
  activeNations: any = new Array('it', 'de', 'ca', 'us', 'is', 'no', 
    'se', 'ie', 'gb', 'dk', 'nl', 'be', 'cz', 'ch', 'pt', 'fr', 'es', 
    'gr', 'hu', 'at', 'ba', 'rs', 'hr', 'cu', 'do', 'bs', 'mx', 'cn',
    'hk', 'mo', 'th', 'vn');
    
  slot1: string = "../../assets/images/" + this.countrySelected + "/image1.jpg";
  slot2: string = "../../assets/images/" + this.countrySelected + "/image2.jpg";
  slot3: string = "../../assets/images/" + this.countrySelected + "/image3.jpg";
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
  @Inject(DOCUMENT) private document: any;
  

  setup(element, code, region) {

    if (this.activeNations.indexOf(code) > -1) {
      this.countrySelected = region;
      region = region.replace(/\s+/g, '');
      this.slot1 = "../../assets/images/" + region + "/image1.jpg";
      this.slot2 = "../../assets/images/" + region + "/image2.jpg";
      this.slot3 = "../../assets/images/" + region + "/image3.jpg";
    } else {
      element.preventDefault();
    }
  }


  ngOnInit() {


    let countrySelected = "Canada";
    let slot1 = "../../assets/images/" + this.countrySelected + "/image1.jpg";
    let slot2 = "../../assets/images/" + this.countrySelected + "/image2.jpg";
    let slot3 = "../../assets/images/" + this.countrySelected + "/image3.jpg";

    
    $('#vmap').vectorMap({
      map: 'world_en',
      backgroundColor: 'transparent',
      borderOpacity: 0.01,
      borderWidth: 0.1,
      borderColor: '#000',
      color: '#cecdcd',
      colors: {
          'it': '#2FB8FC', 'de': '#2FB8FC', 'ca': '#2FB8FC', 'us': '#2FB8FC', 'is': '#2FB8FC',
          'no': '#2FB8FC', 'se': '#2FB8FC', 'ie': '#2FB8FC', 'gb': '#2FB8FC', 'dk': '#2FB8FC',
          'nl': '#2FB8FC', 'be': '#2FB8FC', 'cz': '#2FB8FC', 'ch': '#2FB8FC', 'pt': '#2FB8FC',
          'fr': '#2FB8FC', 'es': '#2FB8FC', 'gr': '#2FB8FC', 'hu': '#2FB8FC', 'at': '#2FB8FC',
          'ba': '#2FB8FC', 'rs': '#2FB8FC', 'hr': '#2FB8FC', 'cu': '#2FB8FC', 'do': '#2FB8FC',
          'bs': '#2FB8FC', 'mx': '#2FB8FC', 'cn': '#2FB8FC', 'hk': '#2FB8FC', 'mo': '#2FB8FC', 
          'th': '#2FB8FC', 'vn': '#2FB8FC',
      },
      hoverColor: '#f46b49',
      hoverOpacity: null,
      normalizeFunction: 'linear',
      selectedColor: '#1d1d1b',
      showTooltip: false,
      onRegionClick: (element, code, region) => { this.setup(element, code, region);}
    });
  }
  
}


