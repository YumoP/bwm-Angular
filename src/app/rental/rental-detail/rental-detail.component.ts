import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  rental: Rental;
  constructor(private route: ActivatedRoute, private service:RentalService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params)=>{
        this.getRental(params['rentalId']);
        //console.log(params);
      }
    );
  }
  getRental(rentalId: string){
    const idObservable = this.service.getRentalById(rentalId); 
    idObservable.subscribe((rental: Rental)=>{
      this.rental = rental;
    });
  }
}
