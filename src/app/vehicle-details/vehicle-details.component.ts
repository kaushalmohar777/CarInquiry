import { Component, OnInit } from '@angular/core';
import { RouteDetailService } from '../route-detail.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  constructor(private _carRoute: RouteDetailService, private router:Router) {
  }
  ngOnInit(): void {
    this.carRoute = this._carRoute.carRoute.value
    console.log(this.carRoute)
  }
  carRoute: any = {
    from_locaton: '',
    to_locaton: '',
    time: '',
    cartype: ''
  }
  vehicleBooking = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    phoneNo: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{10}")]),
    year: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{4}")]),
    make: new FormControl(null, Validators.required),
    model: new FormControl(null, Validators.required),
  });
  notValid:boolean = false;
  async bookingVehicle() {
    if (this.vehicleBooking.valid && this.carRoute.from_locaton !== undefined) {
      console.log(this.vehicleBooking)
      emailjs.init('rc2yqn30hrrCoSNDn');
      let response = await emailjs.send("service_4hcqqxk", "template_nbatbvz", {
        from_name: this.vehicleBooking.controls.email.value,
        to_name: this.vehicleBooking.controls.phoneNo.value,
        from_email: this.vehicleBooking.controls.year.value,
        subject: this.vehicleBooking.controls.make.value,
        message: this.vehicleBooking.controls.model.value,
  
        from_locaton: this.carRoute.from_locaton,
        to_locaton: this.carRoute.to_locaton,
        time: this.carRoute.time,
        cartype: this.carRoute.carType
      }).then((res) => console.log("success", res)).catch((err) => console.log("field", err))
      // alert("message has been send")
      this.router.navigate(['success'])
    }else{
      this.notValid = true;
    }
     if(this.vehicleBooking.valid && this.carRoute.from_locaton == undefined){
      alert("Plaese fill Route details")
    }
  }
}
