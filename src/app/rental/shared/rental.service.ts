import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rental } from "./rental.model";

@Injectable()
export class RentalService{
    private rentals :Rental[] = [{
      id: "1",
      title: "Central Apartment",
      city: "New York",
      street: "Times Sqaure",
      category: "apartment",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 3,
      description: "Very nice apartment",
      dailyRate: 34,
      shared: false,
      createdAt: "24/12/2017"
    },
    {
      id: "2",
      title: "Central Apartment 2",
      city: "San Francisco",
      street: "Main street",
      category: "condo",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 2,
      description: "Very nice apartment",
      dailyRate: 12,
      shared: true,
      createdAt: "24/12/2017"
    },
    {
      id: "3",
      title: "Central Apartment 3",
      city: "Bratislava",
      street: "Hlavna",
      category: "condo",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 2,
      description: "Very nice apartment",
      dailyRate: 334,
      shared: true,
      createdAt: "24/12/2017"
    },
    {
      id: "4",
      title: "Central Apartment 4",
      city: "Berlin",
      street: "Haupt strasse",
      category: "house",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 9,
      description: "Very nice apartment",
      dailyRate: 324,
      shared: true,
      createdAt: "24/12/2017"
    },
    {
      id: "5",
      title: "Central Apartment 5",
      city: "ShangHai",
      street: "ShiJi Ave",
      category: "Apartment",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 3,
      description: "Very nice apartment",
      dailyRate: 503,
      shared: true,
      createdAt: "24/12/2017"
    },
    {
      id: "6",
      title: "Central Apartment 6",
      city: "Edison",
      street: "46 Walker Ave",
      category: "house",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 6,
      description: "Very nice apartment",
      dailyRate: 305,
      shared: true,
      createdAt: "24/12/2017"
    },
    {
      id: "7",
      title: "Central Apartment 7",
      city: "New York",
      street: "5th Avenue",
      category: "Apartment",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 3,
      description: "Very nice apartment",
      dailyRate: 533,
      shared: false,
      createdAt: "14/5/2018"
    },
    {
      id: "8",
      title: "Central Apartment 8",
      city: "West Lafayette",
      street: "Haupt strasse",
      category: "house",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 10,
      description: "Very nice apartment",
      dailyRate: 93,
      shared: true,
      createdAt: "2/2/2016"
    },
    {
      id: "9",
      title: "Central Apartment 9",
      city: "Miami",
      street: "Haupt strasse",
      category: "house",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 12,
      description: "Very nice apartment",
      dailyRate: 233,
      shared: true,
      createdAt: "24/2/2018"
    },
    {
      id: "10",
      title: "Central Apartment 10",
      city: "Long Island",
      street: "St.Smith st",
      category: "house",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 7,
      description: "Very nice apartment",
      dailyRate: 100,
      shared: true,
      createdAt: "4/1/2018"
    },
    {
      id: "11",
      title: "Central Apartment 11",
      city: "BeiJing",
      street: "Haupt strasse",
      category: "house",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 9,
      description: "Very nice apartment",
      dailyRate: 33,
      shared: true,
      createdAt: "24/12/2017"
    },
    {
      id: "12",
      title: "Central Apartment 12",
      city: "HuZhou",
      street: "AiShan St",
      category: "Apartment",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 3,
      description: "Very nice apartment",
      dailyRate: 120,
      shared: true,
      createdAt: "20/11/2013"
    }];
    public getRentalById(rentalId: string){
      return new Observable<Rental>((observer) => {
        const curRental = this.rentals.find((element) => {
          return element.id === rentalId;
        });
        observer.next(curRental);
      });
    }
    public getRentals():Observable<Rental[]>{
      return new Observable((observer)=>{
          observer.next(this.rentals);
        });
    }
}