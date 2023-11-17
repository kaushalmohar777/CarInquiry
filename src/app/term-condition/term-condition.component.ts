import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-term-condition',
  templateUrl: './term-condition.component.html',
  styleUrls: ['./term-condition.component.css']
})
export class TermConditionComponent implements OnInit {
  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    }); 
  }
}
