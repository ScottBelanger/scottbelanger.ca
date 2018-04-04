import { Component, OnInit, Input } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-jqvmap-guide-card',
  templateUrl: './jqvmap-guide-card.component.html',
  styleUrls: ['./jqvmap-guide-card.component.less']
})
export class JqvmapGuideCardComponent implements OnInit {

  @Input() cardTitle: string;
  @Input() buttonAttr: string;

  showSource: string = "none";
  

  constructor() { }

  ngOnInit() {
    this.checkButtonType();

    $('#vmap').vectorMap({
      map: 'world_en',
      backgroundColor: 'transparent',
      borderOpacity: 0.01,
      borderWidth: 0.1,
      borderColor: '#000',
      color: '#cecdcd',
      hoverColor: '#f46b49',
      hoverOpacity: null,
      normalizeFunction: 'linear',
      selectedColor: '#1d1d1b',
      showTooltip: false
    });
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
