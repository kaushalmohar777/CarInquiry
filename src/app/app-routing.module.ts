import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { SuccessfulComponent } from './successful/successful.component';
import { FaqComponent } from './faq/faq.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:HomeComponent},
  {path:'vehicleDetails', component:VehicleDetailsComponent},
  {path:'success', component:SuccessfulComponent},
  {path:'faq', component:FaqComponent},
  {path:'termCondition', component:TermConditionComponent},
  {path:'service', component:ServicesComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  