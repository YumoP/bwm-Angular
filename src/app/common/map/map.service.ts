import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CamelizePipe } from 'ngx-pipes';

@Injectable() export class MapService{
  private geoCoder;
  private localCache: any = {};

  constructor(private camlizePipe: CamelizePipe){};

  private camlize(value: string):string {
    return this.camlizePipe.transform(value);
  }

  private cacheLocation(location: string, corrdinates: any){
    this.localCache[this.camlize(location)] = corrdinates;
  } 

  private isLocationCached(location){
    return this.localCache[this.camlize(location)];
  }
  private geoCodeLocation(location: string): Observable<any>{
    if(!this.geoCoder){
      this.geoCoder = new (<any>window).google.maps.Geocoder();
    }
    return new Observable((observer)=>{
      this.geoCoder.geocode({address:  location}, (result, status)=>{
        if(status === 'OK'){
          //console.log(result);
          const geometry = result[0].geometry.location;
          const corrdinates = {lat: geometry.lat(), lng:geometry.lng()};
          this.cacheLocation(location, corrdinates);
          observer.next({lat: geometry.lat(), lng: geometry.lng()});
        }else{
          observer.error("location could not be geocoded");
        }
      });
    });
  }
  public getGeoLocation(location: string): Observable<any>{
    if(this.isLocationCached(location)){
      return new Observable((observer)=>{
        observer.next(this.localCache[this.camlize(location)]);
      });
    }else{
      return this.geoCodeLocation(location);
    }
  }
}