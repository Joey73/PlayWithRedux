import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store'; 
import { ADD } from '../actions'; 
import { IAppState } from '../store'; 

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  @select() entry;
  @select() lastUpdate; 

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  add(input1, input2, input3){
    console.log('input1.value: ' + input1.value);
    console.log('input2.value: ' + input2.value);
    console.log('input3.value: ' + input3.value);
    this.ngRedux.dispatch({ type: ADD, text1: input1.value, text2: input2.value, text3: input3.value });
  }
}