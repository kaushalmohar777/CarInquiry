import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { SuccessfulComponent } from './successful/successful.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'vehicleDetails', component:VehicleDetailsComponent},
  {path:'Successful', component:SuccessfulComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
