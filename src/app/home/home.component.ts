import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RouteDetailService } from '../route-detail.service';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carInfo: any = [
    { carType: "small Car", carImg: '../../assets/images/carType/smallCar.svg' },
    { carType: "Midsize Car", carImg: '../../assets/images/carType/midsizeCar.svg' },
    { carType: "Large Car", carImg: '../../assets/images/carType/largeCar.svg' },
    { carType: "Small SUV", carImg: '../../assets/images/carType/smallSUV.svg' },
    { carType: "Midsize SUV", carImg: '../../assets/images/carType/midsizeSUV.svg' },
    { carType: "Sports Car", carImg: '../../assets/images/carType/sportsCar.svg' },
    { carType: "Large SUV", carImg: '../../assets/images/carType/largeSUV.svg' },
    { carType: "Training car", carImg: '../../assets/images/carType/trainingcar.svg' },
    { carType: "Mini-Van", carImg: '../../assets/images/carType/miniVan.svg' },
    { carType: "Medium Pickup", carImg: '../../assets/images/carType/mediumPickup.svg' },
    { carType: "Traveler Van", carImg: '../../assets/images/carType/travelerVan.svg' },
    { carType: "Fullsize Van", carImg: '../../assets/images/carType/fullsizeVan.svg' }
  ]
  constructor(private _carRoute: RouteDetailService, private router: Router) { }
  ngOnInit(): void {
    this.counter();
  }

  mailForm = new FormGroup({
    from_locaton: new FormControl(null, Validators.required),
    to_locaton: new FormControl(null, Validators.required),
    time: new FormControl(null, Validators.required),
    cartype: new FormControl()
  })
  notValid: boolean = false;
  send() {
    if (this.mailForm.valid && this.carSize) {
      this._carRoute.carRoute.next(this.mailForm.value)
      this.router.navigate(['vehicleDetails'])
    } else {
      this.notValid = true;
      this.carValid = true;
    }
  }
  // car_type:any;;
  carSize: any
  carValid: boolean = false;
  selectCarType(carType: string) {
    this.mailForm.get('cartype')?.setValue(carType)
    this.carValid = false;
    this.carSize = carType;
  }

  // owel slider logics start==================
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 20,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:3000,
    // autoplayHoverPause:true,
    autoplaySpeed:2500 ,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  // owel slider logics end==================

  // window scrolling function start==============
  // isShow: boolean = false;
  // topPosToStartShowing = 100;
  // @HostListener('window:scroll')
  // checkScroll() {
  //   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   console.log('[scroll]', scrollPosition);
    // if(scrollPosition > 3600 && scrollPosition < 5100){
    //   this.counter();
    //   console.log('3400')
    //   console.log(this.counter())
    // }

    // if (scrollPosition >= this.topPosToStartShowing) {
    //   this.isShow = true;
    // } else {
    //   this.isShow = false;
    // }
  // }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  // window scrolling function end==============

  customers: number = 1000;
  Vehicles: number = 10000
  year: number = 0
  drivers: number = 0
  counter() {
    setInterval(() => {
      if (this.customers < 10000) {
        this.customers = this.customers + 25
      }
    }, 10)

    setInterval(() => {
      if (this.Vehicles < 1000000) {
        this.Vehicles = this.Vehicles + 2500
      }
    }, 10)

    setInterval(() => {
      if (this.drivers < 6000) {
        this.drivers = this.drivers + 250
      }
    }, 100)

    setInterval(() => {
      if (this.year < 15) {
        this.year++
      }
    }, 400)
  }

  // banner slider logic start=======================
  bannerSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 0,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:4000,
    // autoplayHoverPause:true,
    autoplaySpeed:3500 ,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  // banner slider logic end=======================

}
