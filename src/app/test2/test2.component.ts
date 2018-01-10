import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store'; 
import { IAppState } from '../store'; 

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  @select() test1Entry;
  @select() test1LastUpdate; 

  constructor() { }

  ngOnInit() {
  }

}