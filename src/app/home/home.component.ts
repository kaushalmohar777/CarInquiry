import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RouteDetailService } from '../route-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  carInfo:any = [
    {carType:"small Car", carImg:'../../assets/images/sm-car.svg'},
    {carType:"Midsize Car", carImg:'../../assets/images/sm-car.svg'},
    {carType:"Large Car", carImg:'../../assets/images/sm-car.svg'},
    {carType:"Small SUV", carImg:'../../assets/images/sm-car.svg'},
    {carType:"Midsize SUV", carImg:'../../assets/images/sm-car.svg'},
    {carType:"Large SUV", carImg:'../../assets/images/sm-car.svg'},
    {carType:"Training car", carImg:'../../assets/images/sm-car.svg'},
    {carType:"Mini-Van", carImg:'../../assets/images/sm-car.svg'},
    {carType:"Medium Pickup", carImg:'../../assets/images/sm-car.svg'},
    {carType:"Traveler Van", carImg:'../../assets/images/sm-car.svg'},
    {carType:"Fullsize Van", carImg:'../../assets/images/sm-car.svg'}
  ]
  constructor(private _carRoute:RouteDetailService, private router:Router) { }


  mailForm = new FormGroup({
    from_locaton: new FormControl(null, Validators.required),
    to_locaton : new FormControl(null, Validators.required),
    time : new FormControl(null, Validators.required),
    cartype : new FormControl()
  })
  send(){
    if(this.mailForm.valid){
      this._carRoute.carRoute.next(this.mailForm.value)
      this.router.navigate(['vehicleDetails'])
    }
    console.log(this.mailForm.valid)
  }
  selectCarType(carType:string){
    this.mailForm.get('cartype')?.setValue(carType)
  }
}
