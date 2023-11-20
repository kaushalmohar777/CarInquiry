import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouteDetailService } from '../route-detail.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeClass:boolean = true;
  constructor(private _carService:RouteDetailService){
    this._carService.activeClass.subscribe((res:boolean)=>{
      this.activeClass = res
    })
  }

  @ViewChild('navToggle') navTogglee! :ElementRef; 
  navTogglebar(){
    this.navTogglee.nativeElement.classList.remove('show')
  }
}
