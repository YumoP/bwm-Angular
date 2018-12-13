import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bwm-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {
  @Input() recommendImg: any; 
  constructor() { 
  }

  ngOnInit() {
  }
  

}
