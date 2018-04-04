import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var ga: Function;

@Component({
  selector: 'app-my-photos',
  templateUrl: './my-photos.component.html',
  styleUrls: ['./my-photos.component.less']
})
export class MyPhotosComponent implements OnInit {

  thumbnailPhotos: string[] = ["vienna", "salzburg", "brussels", "mostar", "dubrovnik", "plitvice", "paris", "prague", "london",
                               "munich", "santorini", "iceland", "kotor", "swissalps", "positano", "chiangmai", "halongbay"
                              ];
  photoInfo: any = {
    'vienna': "The Vienna Opera House",
    'salzburg': "A view of the alps from Salzburg Castle",
    'brussels': "The Grand Square in Brussels, Belgium",
    'mostar': "Famous bridge of Mostar called Stari Most",
    'dubrovnik': "The fully walled city of old town Dubrovnik",
    'plitvice': "Plitvice Lakes in Croatia",
    'paris': "The Eiffel Tower in Paris, France",
    'prague': "The Charles Bridge in Prague, Czech Republic",
    'london': "Big Ben in London, England",
    'munich': "2016 Oktoberfest in Munich, Germany",
    'santorini': "A beautiful sunset in Santorini, Greece",
    'iceland': "Solheimajokull Glacier near Vik, Iceland",
    'kotor': "The Bay of Kotor in Montenegro",
    'swissalps': "View of the Swiss Alps from Kleine Scheidegg, Switzerland",
    'positano': "The town of Positano, part of the Amalfi Coast in Italy",
    'chiangmai': "Elephant Sanctuary in Chiang Mai, Thailand",
    'halongbay': "Ha Long Bay in Vietnam"
  };
  focused: number = 2;

  thumb1Name: string = "../../assets/images/myPhotosPage/" + this.thumbnailPhotos[0] + ".jpg";
  thumb2Name: string = "../../assets/images/myPhotosPage/" + this.thumbnailPhotos[1] + ".jpg";
  thumb3Name: string = "../../assets/images/myPhotosPage/" + this.thumbnailPhotos[this.focused] + ".jpg";
  thumb4Name: string = "../../assets/images/myPhotosPage/" + this.thumbnailPhotos[3] + ".jpg";
  thumb5Name: string = "../../assets/images/myPhotosPage/" + this.thumbnailPhotos[4] + ".jpg";
  mainPhotoName: string = "../../assets/images/myPhotosPage/" + this.thumbnailPhotos[this.focused] + ".jpg";


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
    document.getElementById("photoInfo").innerHTML = this.photoInfo[this.thumbnailPhotos[this.focused]];
  }

  //Function to cycle the photos to the right
  rotateRight() {
    if(this.focused >= (this.thumbnailPhotos.length - 1)) {
      this.focused = 0;
    }
    else {
      this.focused += 1;
    }
    this.rotate();
  }

  //Function to cycle the photos to the left
  rotateLeft() {
    if(this.focused <= 0) {
      this.focused = (this.thumbnailPhotos.length-1);
    }
    else {
      this.focused -= 1;
    }
    this.rotate();
  }

  rotate() {
    for(let i=0; i<5; i++) {
      /* Check for the edge case in which case you are looping back to the end of the array */
      if(this.focused == 0){
        this.thumb1Name = "../assets/images/myPhotosPage/" + this.thumbnailPhotos[this.thumbnailPhotos.length-2] + ".jpg";
        this.thumb2Name = "../assets/images/myPhotosPage/" + this.thumbnailPhotos[this.thumbnailPhotos.length-1] + ".jpg";
      }
      else if(this.focused == 1){
        this.thumb1Name = "../assets/images/myPhotosPage/" + this.thumbnailPhotos[this.thumbnailPhotos.length-1] + ".jpg";
        this.thumb2Name = "../assets/images/myPhotosPage/" + this.thumbnailPhotos[this.focused-1] + ".jpg";
      }
      else {
        this.thumb1Name = "../assets/images/myPhotosPage/" + this.thumbnailPhotos[this.focused-2] + ".jpg";
        this.thumb2Name = "../assets/images/myPhotosPage/" + this.thumbnailPhotos[this.focused-1] + ".jpg";
      }
      this.thumb3Name = "../assets/images/myPhotosPage/" + this.thumbnailPhotos[this.focused] + ".jpg";
      this.mainPhotoName = "../assets/images/myPhotosPage/" + this.thumbnailPhotos[this.focused] + ".jpg";
      document.getElementById("photoInfo").innerHTML = this.photoInfo[this.thumbnailPhotos[this.focused]];
        
      if(this.focused == (this.thumbnailPhotos.length-2)){
        this.thumb4Name = "../assets/images/myPhotosPage/" + this.thumbnailPhotos[this.thumbnailPhotos.length-1] + ".jpg";
        this.thumb5Name = "../assets/images/myPhotosPage/" + this.thumbnailPhotos[0] + ".jpg";
      }
      else if(this.focused == (this.thumbnailPhotos.length-1)){
        this.thumb4Name = "../assets/images/myPhotosPage/" + this.thumbnailPhotos[0] + ".jpg";
        this.thumb5Name = "../assets/images/myPhotosPage/" + this.thumbnailPhotos[1] + ".jpg";
      }
      else {
        this.thumb4Name = "../assets/images/myPhotosPage/" + this.thumbnailPhotos[this.focused+1] + ".jpg";
        this.thumb5Name = "../assets/images/myPhotosPage/" + this.thumbnailPhotos[this.focused+2] + ".jpg";
      }
    }
  }

  reFocus(offSet) {
    switch(this.focused += offSet) {
      case -2:
        this.focused = this.thumbnailPhotos.length-2;
        break;
      case -1:
        this.focused = this.thumbnailPhotos.length-1;
        break;
      case 0:
        break;
      case this.thumbnailPhotos.length:
        this.focused = 0;
        break;
      case (this.thumbnailPhotos.length+1):
        this.focused = 1;
        break;
    }
    this.rotate();
  }

  @HostListener('document:keydown', ['$event'])
  keypress(e: KeyboardEvent) {
    if(e.key === "ArrowLeft") {
      this.rotateLeft();
    }
    if(e.key === "ArrowRight") {
      this.rotateRight();
    }
  }
}
