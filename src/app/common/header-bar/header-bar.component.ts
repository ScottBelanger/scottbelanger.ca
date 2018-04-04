import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.less']
})
export class HeaderBarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  gotoInteractiveMap() {
    this.router.navigate(['/interactivemap']);
  }

  gotoHomePage() {
    this.router.navigate(['/homepage']);
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
