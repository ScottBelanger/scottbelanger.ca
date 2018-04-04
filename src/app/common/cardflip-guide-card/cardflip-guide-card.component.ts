import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardflip-guide-card',
  templateUrl: './cardflip-guide-card.component.html',
  styleUrls: ['./cardflip-guide-card.component.less']
})
export class CardflipGuideCardComponent implements OnInit {

  @Input() cardTitle: string;
  @Input() buttonAttr: string;

  showSource: string = "none";
  

  constructor() { }

  ngOnInit() {
    this.checkButtonType();
  }

  showSourceCode() {
    if(this.showSource === "none") {
      this.showSource = "block";
    }
    else {
      this.showSource = "none";
    }
  }

  checkButtonType() {

    switch (this.cardTitle)
    {
      
    }
  }
}
