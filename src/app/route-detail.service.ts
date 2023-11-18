import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteDetailService {
  
  activeClass = new BehaviorSubject<boolean>(true);
  carRoute = new BehaviorSubject({});

  // carRoute = new BehaviorSubject({from_locaton:'', to_locaton:'', time:'', carType:''});
}
