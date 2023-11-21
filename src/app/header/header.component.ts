import { Component, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { RouteDetailService } from '../route-detail.service';
import { HomeComponent } from '../home/home.component';

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
  goTop(event:any){
    this._carService.taggle.next(event.type)
    this.navTogglee.nativeElement.classList.remove('show')
  }
}