import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwm-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit {
  Recommends: any[] = ["Paris.jpg","Beijing.jpg","Tokyo.jpg"]
  constructor() { }

  ngOnInit() {
  }

}
