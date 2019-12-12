import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import {Hotel} from '../Hotel';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  enteredval: string;
  templ: string;
  hotels: Hotel[];
  rhotels: Hotel[]
  fhotels: Hotel[];
  insorts: Hotel[];
  desorts: Hotel[];
  chotels: Hotel[];

  hotelForm = new FormGroup({
    hotelname: new FormControl('')
  });

  constructor(private restService: RestService) {
    this.restService.findAll().subscribe(data => {
      this.hotels = data;
      this.rhotels = data;
      console.log(data);
    });
   }

  ngOnInit() {
  }

  onclick() {
    this.fhotels = this.hotels.filter(hotel => {
      this.enteredval = this.hotelForm.value.hotelname;
      this.templ = hotel.name.toLowerCase();
      return this.templ.includes(this.enteredval);
    });
    this.hotels = this.fhotels
    console.log(this.fhotels);
  }

  reset() {
    this.hotels = this.rhotels;
    console.log(this.rhotels)
  }

insort() {
  this.insorts = this.hotels.sort((a,b) => {
    return parseInt(a.price) - parseInt(b.price);
  })
  //console.log(this.insorts);
}

desort() {
this.insorts = this.hotels.sort((a,b) => {
    return parseInt(b.price) - parseInt(a.price);
  })
}

clear() {
 this.restService.findAll().subscribe(data => {
      this.hotels = data;
    });
}

}
