import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store'; 
import { IAppState } from '../../store'; 

@Component({
  selector: 'app-test11',
  templateUrl: './test11.component.html',
  styleUrls: ['./test11.component.css']
})
export class Test11Component implements OnInit {
  @select() entry;
  @select() lastUpdate; 

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }
}