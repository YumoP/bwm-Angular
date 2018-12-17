import { Component, OnInit, Input } from '@angular/core';
import { MapService } from './map.service'; 
import { ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat: number = 0;
  lng: number = 0;
  isError: boolean = false;
  @Input() location: string;
  constructor(private service: MapService,
    private ref: ChangeDetectorRef) { }
  
  ngOnInit() {
  }
  mapReadyHandler(){
    this.service.getGeoLocation(this.location).subscribe(
      (coordinates)=>{
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
        this.ref.detectChanges();
      },
      ()=>{
        this.isError = true;
      }

    );
    
  }
}
