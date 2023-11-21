import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteDetailService {
  
  activeClass = new BehaviorSubject<boolean>(true);
  carRoute = new BehaviorSubject({});
  taggle = new BehaviorSubject(null)
  // carRoute = new BehaviorSubject({from_locaton:'', to_locaton:'', time:'', carType:''});
}
