import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store'; 
import { IAppState } from '../../store'; 

@Component({
  selector: 'app-test11',
  templateUrl: './test11.component.html',
  styleUrls: ['./test11.component.css']
})
export class Test11Component implements OnInit {
  @select() test1Entry;
  @select() test1LastUpdate; 
  @select() test2Entry;
  @select() test2LastUpdate; 

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }
}