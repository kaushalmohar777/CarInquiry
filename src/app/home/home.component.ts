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
    {carType:"small Car", carImg:'../../assets/images/carType/smallCar.svg'},
    {carType:"Midsize Car", carImg:'../../assets/images/carType/midsizeCar.svg'},
    {carType:"Large Car", carImg:'../../assets/images/carType/largeCar.svg'},
    {carType:"Small SUV", carImg:'../../assets/images/carType/smallSUV.svg'},
    {carType:"Midsize SUV", carImg:'../../assets/images/carType/midsizeSUV.svg'},
    {carType:"Sports Car", carImg:'../../assets/images/carType/sportsCar.svg'},
    {carType:"Large SUV", carImg:'../../assets/images/carType/largeSUV.svg'},
    {carType:"Training car", carImg:'../../assets/images/carType/trainingcar.svg'},
    {carType:"Mini-Van", carImg:'../../assets/images/carType/miniVan.svg'},
    {carType:"Medium Pickup", carImg:'../../assets/images/carType/mediumPickup.svg'},
    {carType:"Traveler Van", carImg:'../../assets/images/carType/travelerVan.svg'},
    {carType:"Fullsize Van", carImg:'../../assets/images/carType/fullsizeVan.svg'}
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
  // car_type:any;;
  carSize:any
  selectCarType(carType:string){
    this.mailForm.get('cartype')?.setValue(carType) 
    this.carSize = carType
    console.log(carType)
  }
}
